import {
	Navbar,
	HeroSection,
	ThreeColSlider,
	NewResearch,
	Footer,
	FeaturedArticles,
	FeaturedAuthors,
	NewsAndEvents,
} from "components";

const HomePage = () => {
	return (
		<div className="font-sans">
			<Navbar />
			<HeroSection />
			{/* <ThreeColSlider /> */}
			<FeaturedArticles />
			<FeaturedAuthors />
			<NewResearch />
			<NewsAndEvents />
			<Footer />
		</div>
	);
};

export default HomePage;
