import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";
import { CaretDown, List, X } from "phosphor-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="w-full fixed flex justify-between items-center px-16 py-6 max-sm:px-4 max-sm:py-4">
			<div className="text-3xl font-bold">Conversor de Libras</div>

			<div className="flex gap-10 text-md max-lg:hidden">
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
						<span className="flex items-center gap-1">
							Conversores <CaretDown size={18} />
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

			<div className="flex relative justify-center items-center lg:hidden">
				<List
					onClick={() => setToggle(true)}
					size={24}
					className="cursor-pointer"
				/>

				<AnimatePresence>
					{toggle && (
						<motion.div
							initial={{ right: -208 }}
							animate={{ right: 0 }}
							exit={{ right: -208 }}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
							className="w-52 h-screen fixed flex flex-col items-end gap-3 bg-white text-md p-6 right-0 inset-y-0 shadow-[0_0_20px_rgba(168,168,168,.25)]"
						>
							<NavLink
								to="/"
								className={({
									isActive,
								}: {
									isActive: boolean;
								}) =>
									isActive
										? "font-bold mt-5"
										: "hover:font-semibold mt-5"
								}
							>
								Letras
							</NavLink>

							<NavLink
								to="/number"
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

							<NavLink
								to="/word"
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

							<hr className="w-full border-none h-px bg-gray-200" />

							<span className="font-bold">Conversores</span>

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

							<X
								onClick={() => {
									setToggle(false);
								}}
								size={22}
								weight={"bold"}
								className="absolute self-start cursor-pointer text-gray-400 transition-colors duration-1000 hover:text-gray-600"
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Navbar;
