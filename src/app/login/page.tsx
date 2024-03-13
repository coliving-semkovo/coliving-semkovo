import WireframeSection from "@/components/wireframe/wireframe-section";
const LoginPage = () => {
	return (
		<main>
			<WireframeSection
				title="Login"
				explanation="This page lets community members (owners and renters) login."
				links={[
					{
						route: "/signup",
						text: "This is where you can create an account.",
					},
					{
						route: "/manage",
						text: "This is where you go once they've logged in.",
					},
				]}
			/>
		</main>
	);
};

export default LoginPage;
