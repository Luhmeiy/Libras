import {
	Finger,
	FingerCurl,
	FingerDirection,
	GestureDescription,
	// @ts-ignore
} from "fingerpose";

const EuTeAmo = new GestureDescription("eu-te-amo");
const Oi = new GestureDescription("oi");
const Tchau = new GestureDescription("tchau");

// Eu Te Amo
// -----------------------------------------------------------------------------

EuTeAmo.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
EuTeAmo.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

for (let finger of [Finger.Index, Finger.Pinky]) {
	EuTeAmo.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

for (let finger of [Finger.Middle, Finger.Ring]) {
	EuTeAmo.addCurl(finger, FingerCurl.FullCurl, 1.0);
	EuTeAmo.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// Oi
// -----------------------------------------------------------------------------

Oi.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
Oi.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring]) {
	Oi.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// Tchau
// -----------------------------------------------------------------------------

for (let finger of Finger.all) {
	Tchau.addCurl(finger, FingerCurl.NoCurl, 0.9);
}

const handKnownGestures = [EuTeAmo, Oi, Tchau];

const handGestureStrings = {
	"eu-te-amo": "Eu Te Amo ❤",
	"oi": "Oi",
	"tchau": "Tchau",
};

export { handKnownGestures, handGestureStrings };
