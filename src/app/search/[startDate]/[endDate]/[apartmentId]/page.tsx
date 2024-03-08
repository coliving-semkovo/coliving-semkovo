import WireframeSection from "@/components/wireframe/WireframeSection";

const ApartmentDetailPage = () => {
	return (
		<main>
			<WireframeSection
				title="Photos, details and pricing of apartment A789"
				explanation="
This page displays photos, details, features, and prices for apartment A789 for the chosen dates. Visitors can share or email the page to themselves and start booking when ready."
				links={{
					route: "/search/2024-12-01/2025-01-01/A789/exkvj5/book",
					text: "Let's see what happens if a visitor picks this apartment and wants to book.",
				}}
			/>
		</main>
	);
};

export default ApartmentDetailPage;
