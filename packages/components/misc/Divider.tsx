import React from "react";
import { twMerge } from "tailwind-merge";

const Divider = ({
	color = "border-b-black",
	thickness = "border",
	className = "",
}) => {
	return (
		<div
			className={twMerge(`w-full ${thickness} ${color} my-4`, className)}
		></div>
	);
};

export default Divider;
