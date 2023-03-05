import fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const LetterA = new GestureDescription("letter-a"); // A
const LetterB = new GestureDescription("letter-b"); // B
const LetterC = new GestureDescription("letter-c"); // C
const LetterD = new GestureDescription("letter-d"); // D
const LetterE = new GestureDescription("letter-e"); // E

// A
// -----------------------------------------------------------------------------

LetterA.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
LetterA.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.8);
LetterA.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterA.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// B
// -----------------------------------------------------------------------------

LetterB.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
LetterB.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterB.addCurl(finger, FingerCurl.NoCurl, 1.0);
	LetterB.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

// C
// -----------------------------------------------------------------------------

LetterC.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
LetterC.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
LetterC.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.8);
LetterC.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterC.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// D
// -----------------------------------------------------------------------------

LetterD.addCurl(Finger.Index, FingerCurl.NoCurl, 0.9);
LetterD.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);

LetterD.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);
LetterD.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
LetterD.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.9);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterD.addCurl(finger, FingerCurl.HalfCurl, 0.9);
	LetterD.addCurl(finger, FingerCurl.FullCurl, 0.5);
}

// E
// -----------------------------------------------------------------------------

LetterE.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
LetterE.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	LetterE.addCurl(finger, FingerCurl.HalfCurl, 1);
}

const knownGestures = [LetterA, LetterB, LetterC, LetterD, LetterE];

const gestureStrings = {
	"letter-a": "A",
	"letter-b": "B",
	"letter-c": "C",
	"letter-d": "D",
	"letter-e": "E",
};

export { knownGestures, gestureStrings };
