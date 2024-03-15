import WireframeSection from "@/components/wireframe/wireframe-section";

const ApartmentOverviewPage = () => {
	return (
		<main>
			<WireframeSection
				title="Apartment A777"
				explanation="This page allows you to manage and organize everything related to this apartment."
			/>
			<WireframeSection
				title="Manage content"
				explanation="You might want to upload a few photos of your apartment or edit the features your apartment has."
			/>
			<WireframeSection
				title="Manage how you rent out your apartment"
				subsections={[
					{
						title: "Availability & Calendar",
						imageUrl: "/wireframe/calendar.png",
						subsections: [
							{
								explanation:
									"This is where you can let us know which dates you don't want to rent out.",
							},
							{
								explanation:
									"It's also where you'll see upcoming and current bookings.",
							},
						],
						explanation:
							"This is where you can block out dates to make your apartment unvailable",
					},
					{
						title: "Pricing",
						explanation:
							"You can either list your apartment as part of a group of similar units, where guests book a category and are assigned an apartment randomly, or market it uniquely, controlling its pricing and presentation.",
					},
				]}
			/>
			<WireframeSection
				title="Your income & payouts"
				subsections={[
					{
						title: "Balance & payout",
						imageUrl: "/wireframe/balance.png",
					},
					{
						title: "Your transactions",
						explanation:
							"This section tracks your earnings. After a guest's stay concludes, the income from it appears here, available for you to withdraw.",
					},
					{
						title: "Configure payout method",
						explanation:
							"This area allows you to provide bank account details for receiving rent payments collected for you.",
					},
				]}
			/>
		</main>
	);
};

export default ApartmentOverviewPage;
