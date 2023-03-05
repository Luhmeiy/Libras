import handGestureFactory from "./src/index.js";

const Home = () => {
	setTimeout(() => handGestureFactory.initialize(), 2000);

	return (
		<div>
			<canvas id="hands"></canvas>
		</div>
	);
};

export default Home;
