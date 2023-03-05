import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-converter";
import { VERSION } from "@mediapipe/hands";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import * as fp from "fingerpose";
// import "https://cdn.jsdelivr.net/gh/TSedlar/pseudo-styler@1.0.8/pseudostyler.js";

import HandGestureController from "../controllers/handGestureController";
import HandGestureService from "../services/handGestureService";
import HandGestureView from "../views/handGestureView";
import {
	fingerLookupIndexes,
	gestureStrings,
	knownGestures,
} from "../util/util.js";

import Camera from "../../../../lib/shared/camera";
const camera = await Camera.init();

// const styler = new PseudoStyler();

export const handGestureFactory = {
	async initialize() {
		return HandGestureController.initialize({
			camera,
			view: new HandGestureView({
				fingerLookupIndexes,
				// styler,
			}),
			service: new HandGestureService({
				gestureStrings,
				knownGestures,
				fingerpose: fp,
				handPoseDetection: handPoseDetection,
				handsVersion: VERSION,
			}),
		});
	},
};
