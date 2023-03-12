import { handGestureFactory } from "../../factories/handGestureFactory";
import {
	letterKnownGestures,
	letterGestureStrings,
} from "../../util/letterGestures.js";

const Home = () => {
	setTimeout(
		() =>
			handGestureFactory.initialize({
				knownGestures: letterKnownGestures,
				gestureStrings: letterGestureStrings,
			}),
		500
	);

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold mb-2">
				Conversor de Libras para Letras
			</h1>
			<p className="text-gray-500 text-lg mb-12">
				Faça um gesto e o programa reconhecerá qual letra é! <b>*</b>
			</p>

			<div className="border-2 border-black rounded-lg p-12 mb-12">
				<span className="text-8xl font-bold" id="letter-container">
					*
				</span>
			</div>

			<span className="text-gray-500 w-96 text-md">
				<b>*</b> Ainda não há suporte para movimento. Sendo assim, as
				letras h, j, k, x e z não foram adicionadas ou foram adicionadas
				apenas de forma estática.
			</span>
		</div>
	);
};

export default Home;
