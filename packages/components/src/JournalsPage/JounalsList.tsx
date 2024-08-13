import React from "react";
import { ReadMore, Divider } from "components";

const JounalsList = () => {
	const journalsData = [
		{
			heading: "IEEE Open Journal of Antennas and Propagation",
			shortDescription:
				"High-quality, peer reviewed research covering antennas, including analysis, design, development, measurement, standards, and testing; radiation, propagation, and the interaction of electromagnetic waves with discrete and continuous media.",
			longDescription:
				"This fully open access journal publishes high-quality, peer reviewed papers covering antennas, including analysis, design, development, measurement, standards, and testing; radiation, propagation, and the interaction of electromagnetic waves with discrete and continuous media; and applications and systems pertinent to antennas, propagation, and sensing, such as applied optics, millimeter-and sub-millimeter-wave techniques, antenna signal processing and control, radio astronomy, and propagation and radiation aspects of terrestrial and space-based communication, including wireless, mobile, satellite, and telecommunications at all frequencies. The journal peer-review process targets a publication period of 10 weeks from submission to online publication.",
			editor: "Konstantina (Nantia) Nikita",
			designation: "Professor",
			institutions: " National Technical University of Athens, Greece",
			link: "",
			imageLink:
				"https://open.ieee.org/wp-content/uploads/oa-journal-cover_ieee-open-journal-of-antennas-and-propagation.png",
			country: "india",
		},
		{
			heading: "IEEE Open Journal of Antennas and Propagation",
			shortDescription:
				"High-quality, peer reviewed research covering antennas, including analysis, design, development, measurement, standards, and testing; radiation, propagation, and the interaction of electromagnetic waves with discrete and continuous media.",
			longDescription:
				"This fully open access journal publishes high-quality, peer reviewed papers covering antennas, including analysis, design, development, measurement, standards, and testing; radiation, propagation, and the interaction of electromagnetic waves with discrete and continuous media; and applications and systems pertinent to antennas, propagation, and sensing, such as applied optics, millimeter-and sub-millimeter-wave techniques, antenna signal processing and control, radio astronomy, and propagation and radiation aspects of terrestrial and space-based communication, including wireless, mobile, satellite, and telecommunications at all frequencies. The journal peer-review process targets a publication period of 10 weeks from submission to online publication.",
			editor: "Konstantina (Nantia) Nikita",
			designation: "Professor",
			Institution: " National Technical University of Athens, Greece",
			imageLink:
				"https://open.ieee.org/wp-content/uploads/oa-journal-cover_ieee-open-journal-of-antennas-and-propagation.png",
			country: "india",
		},
	];
	return (
		<div className="px-8">
			<div className="flex items-center justify-center flex-col">
				<h2 className="text-[30px] font-bold mb-4">Call for Papers</h2>
				<p className="text-[25px] font-medium text-primary-blue">
					Submit a Paper to an IEEE Fully Open Access Journal
				</p>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-x-6">
				{journalsData.map((value: any) => {
					return (
						<div className="pt-[60px]">
							<div className="flex flex-col sm:flex-row items-center justify-center gap-x-4">
								<div className="flex-1">
									<h2 className="text-xl font-bold italic text-primary-blue mb-2">
										{value.heading}
									</h2>
									<p className="font-normal text-base">
										{value.shortDescription}
									</p>
								</div>
								<div className="w-[30%]">
									<img src={value.imageLink} alt="" />
								</div>
							</div>
							<ReadMore
								text={
									<div>
										<p className="mb-4">{value.longDescription}</p>
										<strong>Editor-in-Chief</strong>
										<p>{value.editor}</p>
										<p>{value.institution}</p>
										<p>{value.country}</p>

										<p className="text-primary-blue">
											<span className="-mr-4">
												Learn More and Submit a Paper{" "}
											</span>
											<img
												className="scale-y-[50%] scale-x-[40%] text-xl font-bold inline w-[5px] object-contain"
												src="https://img.icons8.com/ios-filled/50/long-arrow-right.png"
												alt="long-arrow-right"
											/>
										</p>
									</div>
								}
							/>
							<Divider color="bg-secondry-black-2" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default JounalsList;
