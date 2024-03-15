import WireframeSection from "@/components/wireframe/wireframe-section";
const SignUpPage = () => {
	return (
		<main>
			<WireframeSection
				title="Signup"
				explanation="This page lets community members (owners and renters) login."
				links={[
					{
						route: "/manage",
						text: "This is where you go once you've created your account.",
					},
				]}
			/>
		</main>
	);
};

export default SignUpPage;
