import { Check } from "phosphor-react";
import "../styles/conic.scss";
import "../styles/spinner.scss";

const Checked = () => {
	return (
		<>
			<Check
				size={40}
				weight={"bold"}
				className="absolute top-2 right-2 bg-green-400 text-white rounded-full p-2"
			/>
			<span
				className="absolute top-[calc(.5rem-1px)] right-[calc(.5rem-1px)] w-[calc(2.5rem+2px)] h-[calc(2.5rem+2px)] rounded-full p-2 conic"
				id="blocker"
			></span>
			<span
				className="absolute justify-self-center self-center w-12 h-12 rounded-full border-8 border-gray-100 border-t-gray-800 loading-spinner"
				id="spinner"
			></span>
		</>
	);
};

export default Checked;
