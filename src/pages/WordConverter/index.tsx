import { handGestureFactory } from "../../factories/handGestureFactory";
import {
	handKnownGestures,
	handGestureStrings,
} from "../../util/handGestures.js";

const WordConverter = () => {
	setTimeout(() => {
		handGestureFactory.initialize({
			gestureStrings: handGestureStrings,
			knownGestures: handKnownGestures,
			mode: "converter",
		});
	}, 500);

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center text-center px-4">
			<h1 className="text-4xl font-bold mb-2">
				Conversor de Libras para Palavras/Frases
			</h1>
			<p className="text-gray-500 text-lg mb-12">
				Faça um gesto e o programa reconhecerá qual palavra/frase é!
			</p>

			<div className="border-2 border-black rounded-lg p-12">
				<span className="text-8xl font-bold" id="letter-container">
					*
				</span>
			</div>
		</div>
	);
};

export default WordConverter;
