import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import { HandDetector } from "@tensorflow-models/hand-pose-detection";
import { PixelInput } from "@tensorflow-models/hand-pose-detection/dist/shared/calculators/interfaces/common_interfaces";

interface KeyPoints3DProps {
	x: number;
	y: number;
	z: number;
}

interface PredictionsProps {
	keypoints3D: KeyPoints3DProps;
	handedness: string;
}

type IterableKeypointProps = PredictionsProps & {
	[Symbol.iterator](): Iterator<{
		keypoints3D: KeyPoints3DProps[];
		handedness: string;
	}>;
};

interface HandGestureServiceProps {
	fingerpose: any;
	knownGestures: any[];
	gestureStrings: {
		[index: string]: string;
	};
}

export default class HandGestureService {
	#gestureEstimator;
	#detector: HandDetector | null = null;
	#gestureStrings;
	#isFirst = true;
	#previousGesture = "";
	#containerEl =
		document.getElementById("letter-container") ||
		document.getElementById("first-number-container");
	#secondContainerEl = document.getElementById("second-number-container");

	constructor({
		fingerpose,
		knownGestures,
		gestureStrings,
	}: HandGestureServiceProps) {
		this.#gestureEstimator = new fingerpose.GestureEstimator(knownGestures);
		this.#gestureStrings = gestureStrings;
	}

	async estimate(keypoints3D: KeyPoints3DProps[]) {
		const predictions = await this.#gestureEstimator.estimate(
			this.#getLandMarksFromKeypoints(keypoints3D),
			// porcentagem de confiança do gesto (90%)
			9
		);

		return predictions;
	}

	async #addToContainer(
		result: { name: string },
		container: HTMLSpanElement
	) {
		if (this.#isFirst) {
			this.#isFirst = false;

			this.#previousGesture = result.name;

			// console.log("detected", this.#gestureStrings[result.name]);

			container.innerText = this.#gestureStrings[result.name];

			return;
		}

		if (result.name != this.#previousGesture) {
			// console.log("detected", this.#gestureStrings[result.name]);

			container.innerText = this.#gestureStrings[result.name];

			this.#previousGesture = result.name;
		}
	}

	async *detectGestures(predictions: IterableKeypointProps) {
		for (const hand of predictions) {
			if (!hand.keypoints3D) continue;

			const gestures = await this.estimate(hand.keypoints3D);

			if (!gestures.gestures.length) continue;

			const result: { name: string } = gestures.gestures.reduce(
				(previous: any, current: any) => {}
			);

			if (hand.handedness === "Left") {
				this.#addToContainer(result, this.#containerEl!);
			} else if (hand.handedness === "Right") {
				this.#addToContainer(result, this.#secondContainerEl!);
			}
		}
	}

	#getLandMarksFromKeypoints(keypoints3D: KeyPoints3DProps[]) {
		return keypoints3D.map((keypoint) => [
			keypoint.x,
			keypoint.y,
			keypoint.z,
		]);
	}

	async estimateHands(video: PixelInput) {
		return this.#detector!.estimateHands(video);
	}

	async initializeDetector() {
		if (this.#detector) return this.#detector;

		const detectorConfig: handPoseDetection.MediaPipeHandsMediaPipeModelConfig =
			{
				runtime: "mediapipe",
				solutionPath:
					"https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915",
				modelType: "lite",
				maxHands: 2,
			};

		this.#detector = await handPoseDetection.createDetector(
			handPoseDetection.SupportedModels.MediaPipeHands,
			detectorConfig
		);

		return this.#detector;
	}
}
