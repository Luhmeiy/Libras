import { handGestureFactory } from "../../factories/handGestureFactory";

const Home = () => {
	setTimeout(() => handGestureFactory.initialize(), 500);

	return <div></div>;
};

export default Home;
