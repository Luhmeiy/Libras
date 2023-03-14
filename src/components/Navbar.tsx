import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "react-feather";

const Navbar = () => {
	return (
		<div className="w-full fixed flex justify-between items-center px-16 py-6">
			<div className="text-3xl font-bold">Conversor de Libras</div>

			<div className="flex gap-10 text-md">
				<NavLink
					to="/"
					className={({ isActive }: { isActive: boolean }) =>
						isActive ? "font-bold" : "hover:font-semibold"
					}
				>
					Letras
				</NavLink>

				<NavLink
					to="/number"
					className={({ isActive }: { isActive: boolean }) =>
						isActive ? "font-bold" : "hover:font-semibold"
					}
				>
					Números
				</NavLink>

				<NavLink
					to="/word"
					className={({ isActive }: { isActive: boolean }) =>
						isActive ? "font-bold" : "hover:font-semibold"
					}
				>
					Palavras/Frases
				</NavLink>

				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<span className="flex items-center gap-2">
							Conversores <ChevronDown className="w-4 h-4" />
						</span>
					</DropdownMenu.Trigger>

					<DropdownMenu.Portal>
						<DropdownMenu.Content className="min-w-[220px] flex flex-col gap-4 bg-white rounded-md shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.15)] p-4 mr-10">
							<DropdownMenu.Item>
								<NavLink
									to="/converter/letter"
									className={({
										isActive,
									}: {
										isActive: boolean;
									}) =>
										isActive
											? "font-bold"
											: "hover:font-semibold"
									}
								>
									Letras
								</NavLink>
							</DropdownMenu.Item>

							<DropdownMenu.Item>
								<NavLink
									to="/converter/number"
									className={({
										isActive,
									}: {
										isActive: boolean;
									}) =>
										isActive
											? "font-bold"
											: "hover:font-semibold"
									}
								>
									Números
								</NavLink>
							</DropdownMenu.Item>

							<DropdownMenu.Item>
								<NavLink
									to="/converter/word"
									className={({
										isActive,
									}: {
										isActive: boolean;
									}) =>
										isActive
											? "font-bold"
											: "hover:font-semibold"
									}
								>
									Palavras/Frases
								</NavLink>
							</DropdownMenu.Item>

							<DropdownMenu.Arrow className="fill-white shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.35)]" />
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu.Root>
			</div>
		</div>
	);
};

export default Navbar;
