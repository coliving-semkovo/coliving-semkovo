import WireframeSection from "@/components/wireframe/WireframeSection";

const SearchResultsPage = () => {
	return (
		<main>
			<WireframeSection
				title="List of available apartments"
				explanation="This page will show a list of available apartments for the selected date range. It'll also allow visitors to filter based on attributes (e.g. whether an apartment has a kitchen or how big a space is) and sort (random by default, price and size as options)."
				imageUrl="/wireframe/apartments-list.png"
				links={{
					route: "/search/2024-12-01/2025-01-01/A789",
					text: "Let's see what happens if a visitor picks apartment A789 from the list to learn more about it.",
				}}
			/>
		</main>
	);
};

export default SearchResultsPage;
