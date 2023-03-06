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
}

type IterableKeypointProps = PredictionsProps & {
	[Symbol.iterator](): Iterator<{ keypoints3D: KeyPoints3DProps[] }>;
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

		return predictions.gestures;
	}

	async *detectGestures(predictions: IterableKeypointProps) {
		for (const hand of predictions) {
			if (!hand.keypoints3D) continue;

			const gestures = await this.estimate(hand.keypoints3D);

			if (!gestures.length) continue;

			const result = gestures.reduce((previous: any, current: any) => {});

			if (this.#isFirst) {
				this.#isFirst = false;

				this.#previousGesture = result.name;

				console.log("detected", this.#gestureStrings[result.name]);
				return;
			}

			if (result.name != this.#previousGesture) {
				console.log("detected", this.#gestureStrings[result.name]);

				this.#previousGesture = result.name;
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
