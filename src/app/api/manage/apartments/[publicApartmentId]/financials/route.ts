import type { NextRequest } from "next/server";

export async function GET(request: NextRequest, context) {
	const apartmentId = context?.params?.publicApartmentId;

	// Hard-coded mock data for now
	const financialData = {
		publicApartmentId: apartmentId,
		creditBalance: 500,
		debitBalance: 100,
		transactions: [
			{
				renterName: "John Doe",
				startDate: "2024-03-01",
				endDate: "2024-03-05",
				amountPerNight: 100,
				totalAmount: 400,
			},
			{
				renterName: "Jane Smith",
				startDate: "2024-03-10",
				endDate: "2024-03-15",
				amountPerNight: 150,
				totalAmount: 750,
			},
		],
	};

	return new Response(JSON.stringify(financialData), {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
