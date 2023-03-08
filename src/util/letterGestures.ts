import {
	GestureDescription,
	Finger,
	FingerCurl,
	FingerDirection,
	// @ts-ignore
} from "fingerpose";

const LetterA = new GestureDescription("letter-a"); // A
const LetterB = new GestureDescription("letter-b"); // B
const LetterC = new GestureDescription("letter-c"); // C
const LetterD = new GestureDescription("letter-d"); // D
const LetterE = new GestureDescription("letter-e"); // E
const LetterF = new GestureDescription("letter-f"); // F
const LetterG = new GestureDescription("letter-g"); // G
const LetterH = new GestureDescription("letter-h"); // H

// A
// -----------------------------------------------------------------------------

LetterA.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterA.addCurl(finger, FingerCurl.FullCurl, 1.0);
	LetterA.addDirection(finger, FingerDirection.VerticalUp, 0.8);
}

// B
// -----------------------------------------------------------------------------

LetterB.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
LetterB.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);
LetterB.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.9);
LetterB.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.9);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterB.addCurl(finger, FingerCurl.NoCurl, 1.0);
	LetterB.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

// C
// -----------------------------------------------------------------------------

LetterC.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
LetterC.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.8);
LetterC.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterC.addCurl(finger, FingerCurl.HalfCurl, 0.9);
	LetterC.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1);
	LetterC.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);
}

// D
// -----------------------------------------------------------------------------

LetterD.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);

LetterD.addCurl(Finger.Index, FingerCurl.NoCurl, 0.9);
LetterD.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterD.addCurl(finger, FingerCurl.HalfCurl, 0.9);
	LetterD.addCurl(finger, FingerCurl.FullCurl, 0.5);
}

// E
// -----------------------------------------------------------------------------

LetterE.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
LetterE.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
LetterE.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.8);
LetterE.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterE.addCurl(finger, FingerCurl.HalfCurl, 1);
}

// F
// -----------------------------------------------------------------------------

LetterF.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
LetterF.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
LetterF.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

LetterF.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterF.addCurl(finger, FingerCurl.NoCurl, 1);
	LetterF.addDirection(finger, FingerDirection.VerticalUp, 1);
}

// G
// -----------------------------------------------------------------------------

LetterG.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);

LetterG.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
LetterG.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterG.addCurl(finger, FingerCurl.FullCurl, 1.0);
	LetterG.addDirection(finger, FingerDirection.VerticalUp, 0.8);
}

// H
// -----------------------------------------------------------------------------
// Precisa ser atualizado

for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle]) {
	LetterH.addCurl(finger, FingerCurl.NoCurl, 1.0);
	LetterH.addDirection(finger, FingerDirection.VerticalUp, 0.9);
	LetterH.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
	LetterH.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
	LetterH.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

const letterKnownGestures = [
	LetterA,
	LetterB,
	LetterC,
	LetterD,
	LetterE,
	LetterF,
	LetterG,
	LetterH,
];

const letterGestureStrings = {
	"letter-a": "A",
	"letter-b": "B",
	"letter-c": "C",
	"letter-d": "D",
	"letter-e": "E",
	"letter-f": "F",
	"letter-g": "G",
	"letter-h": "H",
};

export { letterKnownGestures, letterGestureStrings };
