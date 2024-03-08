import WireframeSection from "@/components/wireframe/WireframeSection";

const BookingFunnelPersonalDetails = () => {
	return (
		<main>
			<WireframeSection
				title="Community member details form"
				explanation="This page will display the booking summary and price, and includes a form for our future community member to input their name, email, and phone number."
				links={{
					route: "/search/2024-12-01/2025-01-01/A789/exkvj5/pay",
					text: 'Next, we\'ll see what occurs after a visitor submits their contact details by clicking "Book & Pay".',
				}}
			/>
		</main>
	);
};

export default BookingFunnelPersonalDetails;
