import WireframeSection from "@/components/wireframe/wireframe-section";
const HubPage = () => {
	return (
		<main>
			<WireframeSection
				title="Hub"
				explanation="This section allows logged-in users to manage some basic profile info like their name, photo and social media links that we might surface to other community members over time. If they've logged in using social media (e.g. Google or Facebook accounts, we can pre-populate that information)."
			/>
			<WireframeSection
				title="Manage Profile"
				explanation="This is a form for you to edit your name, upload or change a profile photo and add social media links or a short description we can use."
			/>
			<WireframeSection
				title="Manage Apartments"
				explanation="This section shows a list of the apartments you own (if you're a owner). You can click through to manage the details, see the revenue and bookings for each apartment as well as adapt pricing for your apartment."
				links={[
					{
						route: "/manage/apartments/A777",
						text: "Click through to manage your imaginary apartment A777.",
					},
				]}
			/>
			<WireframeSection
				title="Manage Stays"
				explanation="This section allows logged in users to manage the stays they have booked, including current, future, and past stays."
				links={[
					{
						route: "/manage/stays/45894357934",
						text: "Click to manage your upcoming booking",
					},
				]}
			/>
		</main>
	);
};

export default HubPage;
