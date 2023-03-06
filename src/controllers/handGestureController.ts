import { Hand } from "@tensorflow-models/hand-pose-detection";

interface ViewProps {
	clearCanvas(): void;
	drawResults(hands: []): void;
	loop(fn: () => void): void;
}

interface ServiceProps {
	estimateHands(video: Object): Promise<Hand[]>;
	detectGestures(predictions: Object): AsyncGenerator<never, void, unknown>;
	initializeDetector(): void;
}

interface CameraProps {
	video: Object;
}

interface HandGestureControllerProps {
	view: ViewProps;
	service: ServiceProps;
	camera: CameraProps;
}

export default class HandGestureController {
	#view;
	#service;
	#camera;

	constructor({ view, service, camera }: HandGestureControllerProps) {
		this.#service = service;
		this.#view = view;
		this.#camera = camera;
	}

	async init() {
		return this.#loop();
	}

	async #estimateHands() {
		try {
			const hands = await this.#service.estimateHands(this.#camera.video);
			this.#view.clearCanvas();

			if (hands?.length) this.#view.drawResults(hands);

			for await (const { event, x, y } of this.#service.detectGestures(
				hands
			)) {
			}
		} catch (err) {
			console.log(`deu ruim** ${err}`);
		}
	}

	async #loop() {
		await this.#service.initializeDetector();
		await this.#estimateHands();
		this.#view.loop(this.#loop.bind(this));
	}

	static async initialize(deps: HandGestureControllerProps) {
		const controller = new HandGestureController(deps);
		return controller.init();
	}
}
