import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="w-full fixed flex justify-between items-center px-16 py-6">
			<div className="text-3xl font-bold">Conversor de Libras</div>

			<div className="flex gap-10 text-md">
				<NavLink
					to="/"
					className={({ isActive }: { isActive: boolean }) =>
						isActive ? "font-bold" : "" + "hover:font-semibold"
					}
				>
					Letras
				</NavLink>

				<NavLink
					to="/number"
					className={({ isActive }: { isActive: boolean }) =>
						isActive ? "font-bold" : "" + "hover:font-semibold"
					}
				>
					Números
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
