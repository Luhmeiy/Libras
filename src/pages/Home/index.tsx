import { handGestureFactory } from "../../factories/handGestureFactory";
import { gestureStrings, knownGestures } from "../../util/util";

const Home = () => {
	setTimeout(
		() => handGestureFactory.initialize({ knownGestures, gestureStrings }),
		500
	);

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold mb-2">
				Conversor de Libras para Letras
			</h1>
			<p className="text-gray-500 text-lg mb-12">
				Faça um gesto e o programa reconhecerá qual letra é!
			</p>

			<div className="border-2 border-black rounded-lg p-12">
				<span className="text-8xl font-bold" id="letter-container">
					*
				</span>
			</div>
		</div>
	);
};

export default Home;
