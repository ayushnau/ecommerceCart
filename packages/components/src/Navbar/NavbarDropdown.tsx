import React from "react";
import { useNavigate } from "react-router-dom";

interface NavbarDropdownProps {
	list: any;
}
const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ list }) => {
	const navigate = useNavigate();
	return (
		<div className="p-[15px] shadow-none lg-shadow-lg w-[250px] box-border">
			{Object.keys(list).map((value: any) => {
				return (
					<div
						onClick={() => navigate(`/${list[value]}`)}
						className=" px-[15px] py-[7px] hover:bg-slate-100"
					>
						{value}
					</div>
				);
			})}
		</div>
	);
};

export default NavbarDropdown;
