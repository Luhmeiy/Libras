import {
	GestureDescription,
	Finger,
	FingerCurl,
	FingerDirection,
	// @ts-ignore
} from "fingerpose";

const letterA = new GestureDescription("letter-a"); // A
const letterB = new GestureDescription("letter-b"); // B
const letterC = new GestureDescription("letter-c"); // C
const letterD = new GestureDescription("letter-d"); // D
const letterE = new GestureDescription("letter-e"); // E
const letterF = new GestureDescription("letter-f"); // F
const letterG = new GestureDescription("letter-g"); // G
const letterH = new GestureDescription("letter-h"); // H
const letterI = new GestureDescription("letter-i"); // I
const letterJ = new GestureDescription("letter-j"); // J
const letterK = new GestureDescription("letter-k"); // K
const letterL = new GestureDescription("letter-l"); // L
const letterM = new GestureDescription("letter-m"); // M
const letterN = new GestureDescription("letter-n"); // N
const letterO = new GestureDescription("letter-o"); // O
const letterP = new GestureDescription("letter-p"); // P
const letterQ = new GestureDescription("letter-q"); // Q
const letterR = new GestureDescription("letter-r"); // R
const letterS = new GestureDescription("letter-s"); // S
const letterT = new GestureDescription("letter-t"); // T
const letterU = new GestureDescription("letter-u"); // U
const letterV = new GestureDescription("letter-v"); // V
const letterW = new GestureDescription("letter-w"); // W

// A
// -----------------------------------------------------------------------------

letterA.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterA.addCurl(finger, FingerCurl.FullCurl, 1.0);
	letterA.addDirection(finger, FingerDirection.VerticalUp, 0.8);
}

// B
// -----------------------------------------------------------------------------

letterB.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
letterB.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);
letterB.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.9);
letterB.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.9);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterB.addCurl(finger, FingerCurl.NoCurl, 1.0);
	letterB.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

// C
// -----------------------------------------------------------------------------

letterC.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterC.addCurl(finger, FingerCurl.HalfCurl, 1);
	letterC.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
	letterC.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

// D
// -----------------------------------------------------------------------------

letterD.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);

letterD.addCurl(Finger.Index, FingerCurl.NoCurl, 0.9);
letterD.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterD.addCurl(finger, FingerCurl.HalfCurl, 0.9);
	letterD.addCurl(finger, FingerCurl.FullCurl, 0.5);
}

// E
// -----------------------------------------------------------------------------

letterE.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
letterE.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
letterE.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.8);
letterE.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterE.addCurl(finger, FingerCurl.HalfCurl, 1);
}

// F
// -----------------------------------------------------------------------------

letterF.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
letterF.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
letterF.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);
letterF.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

letterF.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterF.addCurl(finger, FingerCurl.NoCurl, 1);
	letterF.addDirection(finger, FingerDirection.VerticalUp, 1);
}

// G
// -----------------------------------------------------------------------------

letterG.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
letterG.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.9);

letterG.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
letterG.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterG.addCurl(finger, FingerCurl.FullCurl, 1.0);
	letterG.addDirection(finger, FingerDirection.VerticalUp, 0.8);
}

// H
// -----------------------------------------------------------------------------
// Precisa ser atualizado

letterH.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterH.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);

for (let finger of [Finger.Thumb, Finger.Middle]) {
	letterH.addCurl(finger, FingerCurl.NoCurl, 1.0);
	letterH.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
	letterH.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
	letterH.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// I
// -----------------------------------------------------------------------------

letterI.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
letterI.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

letterJ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
	letterI.addCurl(finger, FingerCurl.FullCurl, 0.9);
}

// J
// -----------------------------------------------------------------------------
// Precisa ser atualizado

letterJ.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
letterJ.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);
letterJ.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);

letterJ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
	letterJ.addCurl(finger, FingerCurl.FullCurl, 0.9);
}

// K
// -----------------------------------------------------------------------------
// Precisa ser atualizado

// for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle]) {
// 	letterK.addCurl(finger, FingerCurl.NoCurl, 1.0);
// 	letterK.addDirection(finger, FingerDirection.HorizontalLeft, 0.9);
// 	letterK.addDirection(finger, FingerDirection.HorizontalRight, 0.9);
// 	letterK.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.9);
// 	letterK.addDirection(finger, FingerDirection.DiagonalDownRight, 0.9);
// }

// for (let finger of [Finger.Ring, Finger.Pinky]) {
// 	letterK.addCurl(finger, FingerCurl.FullCurl, 1.0);
// }

// L
// -----------------------------------------------------------------------------

letterL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
letterL.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1);
letterL.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);

letterL.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
letterL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterL.addCurl(finger, FingerCurl.FullCurl, 1.0);
	letterL.addDirection(finger, FingerDirection.VerticalUp, 0.8);
}

// M
// -----------------------------------------------------------------------------

letterM.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
letterM.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.6);

letterM.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
letterM.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
	letterM.addCurl(finger, FingerCurl.NoCurl, 1);
	letterM.addDirection(finger, FingerDirection.VerticalDown, 1);
	letterM.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.9);
	letterM.addDirection(finger, FingerDirection.DiagonalDownRight, 0.9);
}

// N
// -----------------------------------------------------------------------------

letterN.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
letterN.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.6);

for (let finger of [Finger.Index, Finger.Middle]) {
	letterN.addCurl(finger, FingerCurl.NoCurl, 1);
	letterN.addDirection(finger, FingerDirection.VerticalDown, 1);
	letterN.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.9);
	letterN.addDirection(finger, FingerDirection.DiagonalDownRight, 0.9);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
	letterN.addCurl(finger, FingerCurl.FullCurl, 1);
	letterN.addCurl(finger, FingerCurl.HalfCurl, 0.8);
}

// O
// -----------------------------------------------------------------------------

letterO.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
letterO.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.8);
letterO.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterO.addCurl(finger, FingerCurl.HalfCurl, 0.9);
	letterO.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1);
	letterO.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);
}

// P
// -----------------------------------------------------------------------------

for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle]) {
	letterP.addCurl(finger, FingerCurl.NoCurl, 1.0);
	letterP.addDirection(finger, FingerDirection.HorizontalLeft, 0.9);
	letterP.addDirection(finger, FingerDirection.HorizontalRight, 0.9);
	letterP.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.9);
	letterP.addDirection(finger, FingerDirection.DiagonalDownRight, 0.9);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
	letterP.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// Q
// -----------------------------------------------------------------------------

letterQ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
letterQ.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.6);

letterQ.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
letterQ.addDirection(Finger.Index, FingerDirection.VerticalDown, 1);
letterQ.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.9);
letterQ.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.9);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterQ.addCurl(finger, FingerCurl.FullCurl, 1);
	letterQ.addCurl(finger, FingerCurl.HalfCurl, 0.8);
}

// R
// -----------------------------------------------------------------------------

letterR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterR.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
letterR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);

for (let finger of [Finger.Thumb, Finger.Middle]) {
	letterR.addCurl(finger, FingerCurl.NoCurl, 1.0);
	letterR.addDirection(finger, FingerDirection.VerticalUp, 0.9);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
	letterR.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// S
// -----------------------------------------------------------------------------

letterS.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1);
letterS.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
letterS.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.8);
letterS.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.8);
letterS.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.8);
letterS.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterS.addCurl(finger, FingerCurl.FullCurl, 1);
}

// T
// -----------------------------------------------------------------------------
// Precisa ser atualizado

letterT.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
letterT.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
letterT.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

letterT.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
	letterT.addCurl(finger, FingerCurl.NoCurl, 1);
	letterT.addDirection(finger, FingerDirection.VerticalUp, 1);
}

// U
// -----------------------------------------------------------------------------

letterU.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
letterU.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.6);
letterU.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
letterU.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

for (let finger of [Finger.Index, Finger.Middle]) {
	letterU.addCurl(finger, FingerCurl.NoCurl, 1);
	letterU.addDirection(finger, FingerDirection.VerticalUp, 1);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
	letterU.addCurl(finger, FingerCurl.FullCurl, 1);
	letterU.addCurl(finger, FingerCurl.HalfCurl, 0.8);
}

// V
// -----------------------------------------------------------------------------

letterV.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
letterV.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.6);
letterV.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
letterV.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

for (let finger of [Finger.Index, Finger.Middle]) {
	letterV.addCurl(finger, FingerCurl.NoCurl, 1);
	letterV.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
	letterV.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
	letterV.addCurl(finger, FingerCurl.FullCurl, 1);
	letterV.addCurl(finger, FingerCurl.HalfCurl, 0.8);
}

// W
// -----------------------------------------------------------------------------

letterW.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
letterW.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.6);

letterW.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
letterW.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.8);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
	letterW.addCurl(finger, FingerCurl.NoCurl, 1);
	letterW.addDirection(finger, FingerDirection.VerticalUp, 1);
	letterW.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
	letterW.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

const letterKnownGestures = [
	letterA,
	letterB,
	letterC,
	letterD,
	letterE,
	letterF,
	letterG,
	letterH,
	letterI,
	letterJ,
	letterK,
	letterL,
	letterM,
	letterN,
	letterO,
	letterP,
	letterQ,
	letterR,
	letterS,
	letterT,
	letterU,
	letterV,
	letterW,
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
	"letter-i": "I",
	"letter-j": "J",
	"letter-k": "K",
	"letter-l": "L",
	"letter-m": "M",
	"letter-n": "N",
	"letter-o": "O",
	"letter-p": "P",
	"letter-q": "Q",
	"letter-r": "R",
	"letter-s": "S",
	"letter-t": "T",
	"letter-u": "U",
	"letter-v": "V",
	"letter-w": "W",
};

export { letterKnownGestures, letterGestureStrings };
