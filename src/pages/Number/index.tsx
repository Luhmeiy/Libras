import Checked from "../../components/Checked";
import { handGestureFactory } from "../../factories/handGestureFactory";
import {
	numberKnownGestures,
	numberGestureStrings,
} from "../../util/numberGestures";

const Letter = () => {
	setTimeout(() => {
		handGestureFactory.initialize({
			gestureStrings: numberGestureStrings,
			knownGestures: numberKnownGestures,
			mode: "challenge",
		});
	}, 500);

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold mb-2">
				Teste seus conhecimentos de números de Libras!
			</h1>
			<p className="text-gray-500 text-lg mb-12">
				Faça o gesto correspondente ao número que aparecer na tela.
			</p>

			<div className="grid relative border-2 border-black rounded-lg p-12 mb-12">
				<span className="text-8xl font-bold" id="letter-container">
					*
				</span>

				<Checked />
			</div>
		</div>
	);
};

export default Letter;
