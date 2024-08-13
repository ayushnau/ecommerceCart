import React from "react";
import { PageLayout, HeroBanner, Introduction, JournalList } from "components";

const Journals = () => {
	return (
		<PageLayout>
			<HeroBanner />
			<div className="max-w-[1200px] mx-auto">
				<Introduction />
				<JournalList />
			</div>
		</PageLayout>
	);
};

export default Journals;
