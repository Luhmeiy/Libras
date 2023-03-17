import { handGestureFactory } from "../../factories/handGestureFactory";
import {
	numberKnownGestures,
	numberGestureStrings,
} from "../../util/numberGestures";

const NumberConverter = () => {
	setTimeout(() => {
		handGestureFactory.initialize({
			gestureStrings: numberGestureStrings,
			knownGestures: numberKnownGestures,
			mode: "converter",
		});
	}, 500);

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold mb-2">
				Conversor de Libras para Números
			</h1>
			<p className="text-gray-500 text-lg mb-12">
				Faça um gesto e o programa reconhecerá qual número é!
			</p>

			<div className="border-2 border-black rounded-lg p-12">
				<span
					className="text-8xl font-bold"
					id="first-number-container"
				>
					*
				</span>

				<span
					className="text-8xl font-bold"
					id="second-number-container"
				></span>
			</div>
		</div>
	);
};

export default NumberConverter;
