import WireframeSection from "@/components/wireframe/wireframe-section";

const Home = () => {
	return (
		<main>
			<WireframeSection
				title="Homepage hero"
				explanation="Some top-level introduction explaining what we're about: a one-of-a-kind coliving community, with plenty of space for focused work and relaxation in the stunning nature of the Bulgarian mountains. This page and content will continue to be managed through Webflow."
				imageUrl="/wireframe/homepage-hero.png"
			/>
			<WireframeSection
				title="Apartment availability search form"
				explanation="A component similar to what other accommodation and booking sites use that allows the visitor to select their arrival and departure date and click through to search for available apartments."
				imageUrl="/wireframe/availability-search-form.png"
				links={{
					route: "/search/2024-12-01/2025-01-01/",
					text: "Let's see what happens if a visitor searches for an apartment in December 2024.",
				}}
			/>
			<WireframeSection
				title="Other useful marketing content"
				explanation="This is where all the other more in-depth content marketing goes. The homepage content as well as other marketing-focused pages will continue to be managed in Webflow."
			/>
		</main>
	);
};

export default Home;
