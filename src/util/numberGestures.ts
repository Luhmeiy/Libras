import {
	GestureDescription,
	Finger,
	FingerCurl,
	FingerDirection,
	// @ts-ignore
} from "fingerpose";

const numberZero = new GestureDescription("zero"); // 0
const numberOne = new GestureDescription("one"); // 1
const numberTwo = new GestureDescription("two"); // 2
const numberThree = new GestureDescription("three"); // 3
const numberFour = new GestureDescription("four"); // 4

// 0
// -----------------------------------------------------------------------------

numberZero.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	numberZero.addCurl(finger, FingerCurl.HalfCurl, 1);
	numberZero.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
	numberZero.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

// 1
// -----------------------------------------------------------------------------

numberOne.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	numberOne.addCurl(finger, FingerCurl.FullCurl, 1);
	numberOne.addDirection(finger, FingerDirection.HorizontalLeft, 0.9);
	numberOne.addDirection(finger, FingerDirection.HorizontalRight, 0.9);
}

// 2
// -----------------------------------------------------------------------------

numberTwo.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
numberTwo.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

numberTwo.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
numberTwo.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
numberTwo.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);
numberTwo.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1);
numberTwo.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	numberTwo.addCurl(finger, FingerCurl.FullCurl, 1);
	numberTwo.addDirection(finger, FingerDirection.HorizontalLeft, 0.9);
	numberTwo.addDirection(finger, FingerDirection.HorizontalRight, 0.9);
}

// 3
// -----------------------------------------------------------------------------

for (let finger of [Finger.Thumb, Finger.Pinky]) {
	numberThree.addCurl(finger, FingerCurl.FullCurl, 1);
	numberThree.addCurl(finger, FingerCurl.HalfCurl, 0.8);
}

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
	numberThree.addCurl(finger, FingerCurl.NoCurl, 1);
	numberThree.addDirection(finger, FingerDirection.HorizontalLeft, 0.9);
	numberThree.addDirection(finger, FingerDirection.HorizontalRight, 0.9);
	numberThree.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.9);
	numberThree.addDirection(finger, FingerDirection.DiagonalDownRight, 0.9);
}

// 4
// -----------------------------------------------------------------------------

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	numberFour.addCurl(finger, FingerCurl.NoCurl, 1);
	numberFour.addDirection(finger, FingerDirection.HorizontalLeft, 0.9);
	numberFour.addDirection(finger, FingerDirection.HorizontalRight, 0.9);
	numberFour.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.9);
	numberFour.addDirection(finger, FingerDirection.DiagonalDownRight, 0.9);
}

const numberKnownGestures = [
	numberZero,
	numberOne,
	numberTwo,
	numberThree,
	numberFour,
];

const numberGestureStrings = {
	"zero": "0",
	"one": "1",
	"two": "2",
	"three": "3",
	"four": "4",
};

export { numberKnownGestures, numberGestureStrings };
