import { useState } from "react";
import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDown, SearchIcon } from "icons";
import NavbarDropdown from "./Navbar/NavbarDropdown";
import { twMerge } from "tailwind-merge";

const navigation = [
	{
		name: (
			<div>
				About{" "}
				<span className="inline-block">
					<ChevronDown strokeColor={"#000000"} />
				</span>
			</div>
		),
		dropdown: true,
		DropdownComponent: (
			<NavbarDropdown list={{ Overview: "overview", FAQs: "faqs" }} />
		),
	},
	{
		name: (
			<div>
				For Authors{" "}
				<span className="inline-block">
					<ChevronDown strokeColor={"#000000"} />
				</span>
			</div>
		),
		dropdown: true,
		DropdownComponent: (
			<NavbarDropdown
				list={{
					"Author Benefits": "author-benefits",
					"News And Alerts": "news-and-alerts",
				}}
			/>
		),
	},
	{
		name: (
			<div>
				For Institutions{" "}
				<span className="inline-block">
					<ChevronDown strokeColor={"#000000"} />
				</span>
			</div>
		),
		dropdown: true,
		DropdownComponent: (
			<NavbarDropdown list={{ Institutions: "institutions" }} />
		),
	},
	{
		name: <div>What's New</div>,
		dropdown: false,
		DropdownComponent: null,
	},
	{
		name: <SearchIcon />,
		dropdown: false,
		DropdownComponent: null,
	},
];

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white mx-auto h-[100px] flex items-center justify-center sticky top-0 z-50">
			<nav
				aria-label="Global"
				className="w-full h-full flex max-w-7xl items-center justify-between px-6 lg:px-8"
			>
				<a href="#" className="-m-1.5 p-1.5">
					<span className="sr-only">Your Company</span>
					<img
						alt=""
						src="https://open.ieee.org/wp-content/uploads/ieee-open-logo2x.png"
						className="w-1/2 h-1/2"
					/>
				</a>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>
				<div className="h-full hidden lg:flex items-center justify-center lg:gap-x-12">
					{navigation.map((item) => (
						<div
							className={twMerge(
								"cursor-pointer group relative h-full flex items-center justify-center font-bold",
							)}
						>
							{item.name}
							<div className="group-hover:block hidden  hover:block absolute bottom-0 left-0 translate-y-[100%] shadow-lg z-50 bg-white">
								{item.dropdown ? item.DropdownComponent : null}
							</div>
						</div>
					))}
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								alt=""
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								className="h-8 w-auto"
							/>
						</a>

						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<div className={twMerge("cursor-pointer group relative")}>
										{item.name}
										<div className="group-hover:block hidden hover:block relative  lg:absolute bottom-0 translate-y-[0] lg:translate-y-[100%]">
											{item.dropdown ? item.DropdownComponent : null}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
};

export default Navbar;
