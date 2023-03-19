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
const numberFive = new GestureDescription("five"); // 5
const numberSix = new GestureDescription("six"); // 6
const numberSeven = new GestureDescription("seven"); // 7
const numberEight = new GestureDescription("eight"); // 8
const numberNine = new GestureDescription("nine"); // 9

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

numberFour.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
numberFour.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	numberFour.addCurl(finger, FingerCurl.NoCurl, 1);
	numberFour.addDirection(finger, FingerDirection.HorizontalLeft, 0.9);
	numberFour.addDirection(finger, FingerDirection.HorizontalRight, 0.9);
	numberFour.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.9);
	numberFour.addDirection(finger, FingerDirection.DiagonalDownRight, 0.9);
}

// 5
// -----------------------------------------------------------------------------

for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle]) {
	numberFive.addCurl(finger, FingerCurl.HalfCurl, 1);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
	numberFive.addCurl(finger, FingerCurl.FullCurl, 1);
}

// 6
// -----------------------------------------------------------------------------

numberSix.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
numberSix.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
numberSix.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
numberSix.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	numberSix.addCurl(finger, FingerCurl.FullCurl, 1);
	numberSix.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.8);
	numberSix.addDirection(finger, FingerDirection.DiagonalUpRight, 0.8);
}

// 7
// -----------------------------------------------------------------------------

numberSeven.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
numberSeven.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.6);

numberSeven.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
numberSeven.addDirection(Finger.Index, FingerDirection.VerticalDown, 1);
numberSeven.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.9);
numberSeven.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.9);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	numberSeven.addCurl(finger, FingerCurl.FullCurl, 1);
	numberSeven.addCurl(finger, FingerCurl.HalfCurl, 0.8);
}

// 8
// -----------------------------------------------------------------------------

numberEight.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
numberEight.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
numberEight.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.8);
numberEight.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.8);
numberEight.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.8);
numberEight.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	numberEight.addCurl(finger, FingerCurl.FullCurl, 1);
}

// 9
// -----------------------------------------------------------------------------

numberNine.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
numberNine.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
numberNine.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1);
numberNine.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.9);
numberNine.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.9);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	numberNine.addCurl(finger, FingerCurl.FullCurl, 1);
	numberNine.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.8);
	numberNine.addDirection(finger, FingerDirection.DiagonalDownRight, 0.8);
}

const numberKnownGestures = [
	numberZero,
	numberOne,
	numberTwo,
	numberThree,
	numberFour,
	numberFive,
	numberSix,
	numberSeven,
	numberEight,
	numberNine,
];

const numberGestureStrings = {
	"zero": "0",
	"one": "1",
	"two": "2",
	"three": "3",
	"four": "4",
	"five": "5",
	"six": "6",
	"seven": "7",
	"eight": "8",
	"nine": "9",
};

export { numberKnownGestures, numberGestureStrings };
