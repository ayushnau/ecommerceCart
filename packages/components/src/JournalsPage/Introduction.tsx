import React from "react";

const Introduction = () => {
	return (
		<div className="flex flex-col md:flex-row gap-x-15 items-top justify-center px-6 py-[90px] mx-auto gap-x-6">
			<div className="flex-1 mb-8 md:mb-0">
				<img
					src="https://open.ieee.org/wp-content/uploads/Publishing-Options-TJ-TopL1.jpg"
					alt=""
				/>
			</div>
			<div className="flex-1">
				<h2 className="font-bold text-[30px] leading-[35px] mb-8">
					A Growing Collection of Gold Fully Open Access (OA) Options
				</h2>
				<p className="text-[18px] mb-8">
					IEEE offers more options than ever to authors with the launch of new
					gold fully open access journals spanning a wide range of technologies.
					These journals are significant additions to IEEE's well-known and
					respected portfolio of fully open access journals. In addition, many
					of the journals featured here target an accelerated publication time
					frame of 10 weeks for most accepted papers to help get your research
					exposed faster. Visit the publication home page of each title for
					details.
				</p>
				<p className="text-[18px] mb-8">
					The fully open access journals are accepting submissions. Please see
					each journal's description below for more details. All of the titles
					are fully compliant with funder mandates including Plan S. All IEEE
					Open Access titles, current and new, will be hosted on the IEEE
					Xplore® platform.
				</p>
			</div>
		</div>
	);
};

export default Introduction;
