import prisma from "../../lib/prisma";

jest.mock("next/headers", () => {
	return {
		headers: () => {
			return {
				get: jest.fn().mockImplementation(() => {
					return "mydb-schema";
				}),
				has: jest.fn().mockImplementation(() => {
					return true;
				}),
			};
		},
	};
});

describe("Prisma", () => {
	test("something", () => {
		prisma();
	});
});
