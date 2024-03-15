import WireframeSection from "@/components/wireframe/wireframe-section";

const HubPage = () => {
	return (
		<main>
			<WireframeSection
				title="Your Hub"
				explanation="This is where you can manage and organize everything you need to. You need to be logged in to do that."
				subsections={[
					{
						title: "Manage Stays",
						explanation:
							"For anyone community member staying with us, this is where they can see and manage their stays.",
						subsections: [
							{
								explanation:
									"Your current stays go first. This is where you can arrange things like transport, check-in and payments.",
							},
							{
								explanation: "Future stays that haven't started go second.",
								links: [
									{
										route: "/manage/stays/7018463038476/",
										text: "Follow this link to see the kinds of things you might want to manage for your stay.",
									},
								],
							},
							{
								explanation:
									"And your past stays are shown last, allowing you to go back and, for example, retrieve an invoice.",
							},
						],
					},
					{
						title: "Manage Apartments",
						explanation:
							"If you're an owner, this is where you see the apartments you own and manage.",

						subsections: [
							{
								title: "A777",
								links: [
									{
										route: "/manage/apartments/A777",
										text: "This allows you to move to the part of the page where you can manage everything related to your apartment A777.",
									},
								],
							},
						],
					},
					{
						title: "Profile Information",
						imageUrl: "/wireframe/profile.png",
						explanation:
							"You can edit your name, a photo of yourself and social media links you're willing to share with other community members here.",
					},
				]}
			/>
		</main>
	);
};

export default HubPage;
