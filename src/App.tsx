import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Number } from "./pages";

// styles / SCSS
import "./styles/global.scss";

function App() {
	return (
		<div className="font-Inter">
			<canvas
				id="hands"
				className="h-screen w-screen fixed pointer-events-none z-10"
			/>

			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/number" element={<Number />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
