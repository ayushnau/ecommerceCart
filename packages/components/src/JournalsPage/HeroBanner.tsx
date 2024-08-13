import React from "react";

const HeroBanner = () => {
	return (
		<div className="h-[170px] flex items-center overflow-hidden justify-center px-8 w-full relative text-[40px] font-bold text-white bg-center bg-cover bg-[url(https://open.ieee.org/wp-content/uploads/page-title-bg-topical-journals.jpg)]">
			<div className="relative w-full max-w-[1200px] overflow-visible flex items-center justify-start">
				<div className="w-full flex justify-start max-w-[1200px] after:content-[''] after:absolute after:-top-[69px] after:right-0  after:bg-[url('https://open.ieee.org/wp-content/themes/movedo-child/img/ieee-open-page-title-lock2x.png')] after:opacity-60 after:bg-no-repeat after:h-[190px] after:w-[200px] after:bg-cover after:bg-center bg-absolute">
					Fully Open Access Journals
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
