import React from "react";

const HeroSection = () => {
	return (
		<div className="bg-hero-section-background bg-center bg-cover bg-no-repeat w-full h-[600px] py-[50px]">
			<div className="flex ">
				<div className="flex-1 lg:max-w-[50%] max-w-[80%] lg:pl-[94px] pl-[40px]">
					<div className="text-[50px] leading-[60px] font-bold  text-mine-shaft-1">
						The Trusted Solution for Open Access Publishing
					</div>
					<div className="w-[400px] cursor-pointer group   px-[18px] py-[27px] mt-[80px] bg-orange-800 bg-gradient-to-r from-orange-600 to-orange-500 rounded-md shadow-md text-white block text-lg mb-5 max-w-md  no-underline transition duration-300 ease-in-out text-[30px] gap-y-[10px]">
						<div className="text-mine-shaft-1 font-normal text-[18px]">
							Browse the Journals here
						</div>
						<div className=" text-mine-shaft-1 font-semibold font-[25px]">
							Submit a Paper{" "}
							<img
								className="inline-flex ml-0 group-hover:translate-x-1 group-hover:transition-transform"
								width={25}
								height={25}
								src={"./icons/rightIcon.png"}
								alt={"rightIcon"}
							/>
						</div>
					</div>
					<div className="w-[400px] cursor-pointer group px-[18px] py-[27px] bg-orange-800 bg-gradient-to-r from-orange-600 to-orange-500 rounded-md shadow-md text-white block text-lg mb-5 max-w-md no-underline transition duration-300 ease-in-out text-[30px] font-sans gap-y-[10px]">
						<div className="text-mine-shaft-1 font-normal text-[18px]">
							Discover Special Issues and Collections
						</div>
						<div className=" text-mine-shaft-1 font-semibold text-[25px]">
							Explore Issues{" "}
							<img
								className="inline-flex ml-0 group-hover:translate-x-1 group-hover:transition-transform"
								width={25}
								height={25}
								src={"./icons/rightIcon.png"}
								alt={"rightIcon"}
							/>
						</div>
					</div>
				</div>
				<div className="flex-1 "></div>
			</div>
		</div>
	);
};

export default HeroSection;
