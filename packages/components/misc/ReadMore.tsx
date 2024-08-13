import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const ReadMore = ({ text, maxLength = 100 }: any) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div>
			<button
				onClick={toggleReadMore}
				className="flex items-center text-primary-blue hover:underline focus:outline-none"
			>
				<div
					className={twMerge(
						"scale-[70%] transition-transform duration-300",
						isExpanded ? "rotate-0" : "-rotate-90",
					)}
				>
					<img
						width="30"
						height="30"
						src="https://img.icons8.com/ios-glyphs/30/ff6900/sort-down.png"
						alt="sort-down"
					/>
				</div>

				<span className="text-lg font-semibold">
					Read {isExpanded ? "Less" : "More"}
				</span>
			</button>
			<div
				className={twMerge(
					"pl-8 overflow-hidden transition-all duration-500 ease-in-out",
					isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
				)}
			>
				{isExpanded && <p className="mt-2">{text}</p>}
			</div>
		</div>
	);
};

export default ReadMore;
