import WireframeSection from "@/components/wireframe/wireframe-section";

const StayOverviewPage = () => {
	return (
		<main>
			<WireframeSection
				title="Stay Overview & Confirmation"
				explanation="This page provides details of your stay and enables you to manage all related aspects, identified by the booking ID in Cloudbeds. You'll access this page immediately after booking as a confirmation, or by verifying your identity through an email link or user login associated with the stay. Below are potential services/actions we might offer in the future."
				// TODO: Remove illustrative example urls for things we don't want to offer yet.
				links={[
					{
						route: "/manage/stays/83094882939543/checkin",
						text: "Check in: Complete personal details, verify identity, etc.",
					},
					{
						route: "/manage/stays/83094882939543/change-dates",
						text: "Change your stay dates.",
					},
					{
						route: "/manage/stays/83094882939543/payments",
						text: "View current payments and bill.",
					},
					{
						route: "/manage/stays/83094882939543/transport",
						text: "Arrange transport to and from Semkovo.",
					},
					{
						route: "/manage/stays/83094882939543/apartment-access",
						text: "Get access instructions for communal areas and apartment.",
					},
					{
						route: "/manage/stays/83094882939543/cancel",
						text: "Cancel your stay.",
					},
				]}
			/>
		</main>
	);
};

export default StayOverviewPage;
