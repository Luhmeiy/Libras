import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import { HandDetector } from "@tensorflow-models/hand-pose-detection";
import { PixelInput } from "@tensorflow-models/hand-pose-detection/dist/shared/calculators/interfaces/common_interfaces";
import * as _ from "lodash";

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
	mode: string;
}

export default class HandGestureService {
	#gestureEstimator;
	#detector: HandDetector | null = null;
	#gestureStrings;
	#mode;
	#isFirst = true;
	#previousGesture = "";
	#randomItem = "";
	#isAnimationStarted = false;
	#setTimeoutId: number | null = null;
	#containerEl =
		document.getElementById("letter-container") ||
		document.getElementById("first-number-container");
	#secondContainerEl = document.getElementById("second-number-container");

	constructor({
		fingerpose,
		knownGestures,
		gestureStrings,
		mode,
	}: HandGestureServiceProps) {
		this.#gestureEstimator = new fingerpose.GestureEstimator(knownGestures);
		this.#gestureStrings = gestureStrings;
		this.#mode = mode;
	}

	async estimate(keypoints3D: KeyPoints3DProps[]) {
		const predictions = await this.#gestureEstimator.estimate(
			this.#getLandMarksFromKeypoints(keypoints3D),
			// porcentagem de confiança do gesto (90%)
			9
		);

		return predictions.gestures;
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

		if (
			result.name != this.#previousGesture &&
			Number.isNaN(Number(this.#gestureStrings[result.name]))
		) {
			// console.log("detected", this.#gestureStrings[result.name]);

			container.innerText = this.#gestureStrings[result.name];

			this.#previousGesture = result.name;
		} else {
			container.innerText = this.#gestureStrings[result.name];
		}
	}

	async *detectGestures(predictions: IterableKeypointProps) {
		for (const hand of predictions) {
			if (!hand.keypoints3D) continue;

			const gestures = await this.estimate(hand.keypoints3D);

			if (!gestures.length) continue;

			const scoresArray = [];

			for (const gesture of gestures) {
				scoresArray.push(gesture.score);
			}

			const result: { name: string } = [
				gestures[scoresArray.indexOf(_.max(scoresArray))],
			].reduce((previous: any, current: any) => {});

			if (this.#mode === "challenge") {
				if (result.name === this.#randomItem) {
					if (!this.#isAnimationStarted) {
						// console.log("The items are the same!");

						document
							.getElementById("blocker")
							?.classList.add("active");

						this.#setTimeoutId = setTimeout(() => {
							this.#containerEl!.classList.add("hidden");

							document
								.getElementById("blocker")
								?.classList.remove("active");

							document
								.getElementById("spinner")
								?.classList.add("active");

							setTimeout(() => {
								this.#getRandomItem(
									Object.keys(this.#gestureStrings)
								);

								this.#containerEl!.classList.remove("hidden");

								this.#isAnimationStarted = false;

								document
									.getElementById("spinner")
									?.classList.remove("active");
							}, 1500);
						}, 4500);

						this.#isAnimationStarted = true;
					}
				} else {
					// console.log("The items are different!");

					document
						.getElementById("blocker")
						?.classList.remove("active");

					if (this.#isAnimationStarted) {
						clearTimeout(this.#setTimeoutId!);
						this.#isAnimationStarted = false;
					}
				}

				return;
			}

			if (!Number.isNaN(Number(this.#gestureStrings[result.name]))) {
				if (hand.handedness === "Left") {
					this.#addToContainer(result, this.#containerEl!);
				} else if (hand.handedness === "Right") {
					this.#addToContainer(result, this.#secondContainerEl!);
				}
			} else {
				this.#addToContainer(result, this.#containerEl!);
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

	#getRandomItem(gestureStrings: string[]) {
		this.#randomItem =
			gestureStrings[Math.floor(Math.random() * gestureStrings.length)];

		this.#addToContainer(
			{
				name: this.#randomItem,
			},
			this.#containerEl!
		);
	}

	async initializeDetector() {
		if (this.#detector) return this.#detector;

		if (this.#mode === "challenge") {
			this.#getRandomItem(Object.keys(this.#gestureStrings));
		}

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
