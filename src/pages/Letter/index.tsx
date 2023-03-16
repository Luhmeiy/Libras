import Checked from "../../components/Checked";
import { handGestureFactory } from "../../factories/handGestureFactory";
import {
	letterKnownGestures,
	letterGestureStrings,
} from "../../util/letterGestures.js";

const Letter = () => {
	setTimeout(() => {
		handGestureFactory.initialize({
			knownGestures: letterKnownGestures,
			gestureStrings: letterGestureStrings,
			mode: "challenge",
		});
	}, 500);

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold mb-2">
				Teste seus conhecimentos do alfabeto de Libras!
			</h1>
			<p className="text-gray-500 text-lg mb-12">
				Faça o gesto correspondente à letra que aparecer na tela.
			</p>

			<div className="grid relative border-2 border-black rounded-lg p-16 mb-12">
				<span className="text-8xl font-bold" id="letter-container">
					*
				</span>

				<Checked />
			</div>
		</div>
	);
};

export default Letter;
