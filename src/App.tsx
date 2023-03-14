import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
	Letter,
	LetterConverter,
	Number,
	NumberConverter,
	Word,
	WordConverter,
} from "./pages";

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
					<Route path="/" element={<Letter />} />
					<Route path="/number" element={<Number />} />
					<Route path="/word" element={<Word />} />
					<Route path="/converter">
						<Route path="letter" element={<LetterConverter />} />
						<Route path="number" element={<NumberConverter />} />
						<Route path="word" element={<WordConverter />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
