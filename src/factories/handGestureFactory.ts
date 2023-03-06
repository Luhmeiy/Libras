import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-converter";
// @ts-ignore
import * as fp from "fingerpose";

import HandGestureController from "../controllers/handGestureController";
import HandGestureService from "../services/handGestureService";
import HandGestureView from "../views/handGestureView";
import {
	fingerLookupIndexes,
	gestureStrings,
	knownGestures,
} from "../util/util.js";

import Camera from "../lib/camera";
const camera = await Camera.init();

export const handGestureFactory = {
	async initialize() {
		return HandGestureController.initialize({
			camera,
			view: new HandGestureView({
				fingerLookupIndexes,
			}),
			service: new HandGestureService({
				gestureStrings,
				knownGestures,
				fingerpose: fp,
			}),
		});
	},
};
