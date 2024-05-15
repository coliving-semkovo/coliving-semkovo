"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import WireframeSection from "@/components/wireframe/wireframe-section";

const HubPage = () => {
	const { user } = useUser();
	const [title, setTitle] = useState("Your Hub");

	useEffect(() => {
		// Updates the title when the user data is available and valid.
		if (user) {
			const displayName = user.firstName
				? `${user.firstName}${user.firstName.endsWith("s") ? "'" : "'s"} Hub`
				: "Your Hub";
			setTitle(displayName);
		}
	}, [user]);

	return (
		<main>
			<WireframeSection
				title={title}
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
				]}
			/>
		</main>
	);
};

export default HubPage;
