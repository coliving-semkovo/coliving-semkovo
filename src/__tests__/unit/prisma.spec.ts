import prisma from "../../lib/prisma";

const mockHeaders = {
	get: jest.fn().mockImplementation(() => {
		return "mydb-schema";
	}),
	has: jest.fn().mockImplementation(() => {
		return true;
	}),
};

jest.mock("next/headers", () => {
	return {
		headers: () => {
			return mockHeaders;
		},
	};
});

describe("Prisma", () => {
	test("sets the DB schema from the request header if present", () => {
		prisma();
		expect(mockHeaders.has).toHaveBeenCalledWith("X-Test-DB-Schema");
		expect(mockHeaders.get).toHaveBeenCalledWith("X-Test-DB-Schema");
	});
});
