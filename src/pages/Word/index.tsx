import Checked from "../../components/Checked";
import { handGestureFactory } from "../../factories/handGestureFactory";
import {
	handKnownGestures,
	handGestureStrings,
} from "../../util/handGestures.js";

const Word = () => {
	setTimeout(() => {
		handGestureFactory.initialize({
			gestureStrings: handGestureStrings,
			knownGestures: handKnownGestures,
			mode: "challenge",
		});
	}, 500);

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center text-center px-4">
			<h1 className="text-4xl font-bold mb-2">
				Teste seus conhecimentos das expressões mais comuns de Libras!
			</h1>
			<p className="text-gray-500 text-lg mb-12">
				Faça o gesto correspondente à palavra/frase que aparecer na
				tela.
			</p>

			<div className="grid relative border-2 border-black rounded-lg p-12 -z-10">
				<span className="text-8xl font-bold" id="letter-container">
					*
				</span>

				<Checked />
			</div>
		</div>
	);
};

export default Word;
