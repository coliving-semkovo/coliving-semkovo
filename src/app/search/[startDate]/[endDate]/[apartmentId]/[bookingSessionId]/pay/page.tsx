import WireframeSection from "@/components/wireframe/wireframe-section";

const BookingFunnelPaymentDetails = () => {
	return (
		<main>
			<WireframeSection
				title="Payment form"
				explanation="This page will enable future community members to choose their preferred payment method, focusing on cost-effective and low-administration options like GoCardless or Stripe's non-card methods. This will involve redirecting them to their financial institution for payment confirmation."
				imageUrl="/wireframe/bank-payment.png"
				links={{
					route: "/manage/stays/7018463038476",
					text: "Next, let's look at what happens after they have successfully completed the payment, here and at their financial institution, and we can confirm their booking.",
				}}
			/>
		</main>
	);
};

export default BookingFunnelPaymentDetails;
