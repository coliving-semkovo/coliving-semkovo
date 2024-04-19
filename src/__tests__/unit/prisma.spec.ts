import { headers } from "next/headers";
import prisma from "../../lib/prisma";

const testdBSchemaHeaderName = "X-Test-DB-Schema";
const myHeaders = new Headers();

jest.mock("next/headers", () => {
	return {
		headers: () => {
			return myHeaders;
		},
	};
});

describe("Prisma", () => {
	test("sets the DB schema from the request header if present", () => {
		myHeaders.append(testdBSchemaHeaderName, "my-db-schema");
		prisma();
		myHeaders.delete(testdBSchemaHeaderName);
	});
});
