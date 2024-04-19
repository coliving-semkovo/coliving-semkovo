import prisma from "../../lib/prisma";
import { PrismaClient } from "@prisma/client";

const testdBSchemaHeaderName = "X-Test-DB-Schema";
const myHeaders = new Headers();

jest.mock("@prisma/client");

jest.mock("next/headers", () => {
	return {
		headers: () => {
			return myHeaders;
		},
	};
});

describe("Prisma", () => {
	test("sets the DB schema from the request header if present", () => {
		myHeaders.set(testdBSchemaHeaderName, "my-db-schema");

		expect(PrismaClient).toHaveBeenCalledTimes(1);
		expect(PrismaClient).toHaveBeenCalledWith({
			datasourceUrl: process.env.DATABASE_URL,
		});

		prisma();

		expect(PrismaClient).toHaveBeenLastCalledWith({
			datasourceUrl: `${process.env.DATABASE_URL}?schema=my-db-schema`,
		});
		expect(PrismaClient).toHaveBeenCalledTimes(2);

		myHeaders.delete(testdBSchemaHeaderName);
	});
});
