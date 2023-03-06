import { Hand } from "@tensorflow-models/hand-pose-detection";

interface KeypointProps {
	[index: number]: {
		x: number;
		y: number;
	};
}
[];

type IterableKeypointProps = KeypointProps & {
	[Symbol.iterator](): Iterator<{ x: number; y: number }>;
};

interface FingerLookupIndexesProps {
	[key: string]: number[];
}

export default class HandGestureView {
	#handsCanvas: HTMLCanvasElement = document.querySelector("#hands")!;
	#canvasContext = this.#handsCanvas.getContext("2d")!;
	#fingerLookupIndexes;

	constructor({
		fingerLookupIndexes,
	}: {
		fingerLookupIndexes: FingerLookupIndexesProps;
	}) {
		this.#handsCanvas!.width = globalThis.screen.availWidth;
		this.#handsCanvas!.height = globalThis.screen.availHeight;
		this.#fingerLookupIndexes = fingerLookupIndexes;
	}

	clearCanvas() {
		this.#canvasContext.clearRect(
			0,
			0,
			this.#handsCanvas.width,
			this.#handsCanvas.height
		);
	}

	drawResults(hands: Hand[]) {
		for (const { keypoints, handedness } of hands) {
			if (!keypoints) continue;

			this.#canvasContext.fillStyle =
				handedness === "Left" ? "red" : "green";
			this.#canvasContext.strokeStyle = "black";
			this.#canvasContext.lineWidth = 8;
			this.#canvasContext.lineJoin = "round";

			this.#drawJoints(keypoints);
			this.#drawFinger(keypoints);
		}
	}

	#drawJoints(keypoints: IterableKeypointProps) {
		for (const { x, y } of keypoints) {
			this.#canvasContext.beginPath();
			const newX = x - 2;
			const newY = y - 2;

			const radius = 3;
			const startAngle = 0;
			const endAngle = 2 * Math.PI;

			this.#canvasContext.arc(newX, newY, radius, startAngle, endAngle);
			this.#canvasContext.fill();
		}
	}

	#drawFinger(keypoints: KeypointProps) {
		const fingers = Object.keys(this.#fingerLookupIndexes) as string[];

		for (const finger of fingers) {
			const points = this.#fingerLookupIndexes[finger].map(
				(index: number) => keypoints[index]
			);

			const region = new Path2D();

			const [{ x, y }] = points;
			region.moveTo(x, y);

			for (const point of points) {
				region.lineTo(point.x, point.y);
			}

			this.#canvasContext.stroke(region);
		}
	}

	loop(fn: () => void) {
		requestAnimationFrame(fn);
	}
}
