import prisma from "../../lib/prisma";
import { PrismaClient } from "@prisma/client";

const originalEnv = process.env;
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

beforeAll(() => {
	// the Prisma singleton client is created when our prism module is imported by this test file
	expect(PrismaClient).toHaveBeenCalledTimes(1);
	expect(PrismaClient).toHaveBeenCalledWith({
		datasourceUrl: process.env.DATABASE_URL,
	});
	expect(globalThis.prismaGlobal).toBeUndefined();
});

beforeEach(() => {
	jest.clearAllMocks();
});

afterEach(() => {
	jest.clearAllMocks();
	myHeaders.delete(testdBSchemaHeaderName);
	process.env = originalEnv;
});

describe("Prisma", () => {
	test("returns the Prisma singleton client if the request header is not present", () => {
		// make sure that we haven't set the request header in this test somehow by accident
		expect(myHeaders.get(testdBSchemaHeaderName)).toBeNull();

		expect(prisma()).toBeTruthy();

		expect(PrismaClient).not.toHaveBeenCalled();
	});

	test("calling our Prisma function multiple times returns the singleon each time if request header not present", () => {
		// make sure that we haven't set the request header in this test somehow by accident
		expect(myHeaders.get(testdBSchemaHeaderName)).toBeNull();

		expect(prisma()).toBeTruthy();
		expect(prisma()).toBeTruthy();
		expect(prisma()).toBeTruthy();

		expect(PrismaClient).not.toHaveBeenCalled();
	});

	test("sets the DB schema from the request header if present", () => {
		myHeaders.set(testdBSchemaHeaderName, "my-db-schema");

		expect(prisma()).toBeTruthy();

		expect(PrismaClient).toHaveBeenLastCalledWith({
			datasourceUrl: `${process.env.DATABASE_URL}?schema=my-db-schema`,
		});
		expect(PrismaClient).toHaveBeenCalledTimes(1);
	});

	test("returns a new Prisma client if header value changes", () => {
		myHeaders.set(testdBSchemaHeaderName, "my-db-schema");

		expect(prisma()).toBeTruthy();

		expect(PrismaClient).toHaveBeenLastCalledWith({
			datasourceUrl: `${process.env.DATABASE_URL}?schema=my-db-schema`,
		});
		expect(PrismaClient).toHaveBeenCalledTimes(1);

		myHeaders.set(testdBSchemaHeaderName, "my-second-db-schema");

		expect(prisma()).toBeTruthy();

		expect(PrismaClient).toHaveBeenLastCalledWith({
			datasourceUrl: `${process.env.DATABASE_URL}?schema=my-second-db-schema`,
		});
		expect(PrismaClient).toHaveBeenCalledTimes(2);
	});

	test("always use Prisma client singleton if production environment, even if request header present", () => {
		process.env = {
			VERCEL_ENV: "production",
			NODE_ENV: "production",
		};

		expect(prisma()).toBeTruthy();
		expect(PrismaClient).not.toHaveBeenCalled();
		expect(globalThis.prismaGlobal).toBeUndefined();

		myHeaders.set(testdBSchemaHeaderName, "my-db-schema");
		expect(prisma()).toBeTruthy();
		expect(PrismaClient).not.toHaveBeenCalled();
	});

	// the functionality to avoid creating a new client each time will be added in a later PR,
	// so skipping this test for now.
	test.skip("uses the same bespoke Prisma client if the request header is requested multiple times", () => {
		myHeaders.set(testdBSchemaHeaderName, "my-db-schema");

		expect(prisma()).toBeTruthy();
		expect(prisma()).toBeTruthy();

		expect(PrismaClient).toHaveBeenLastCalledWith({
			datasourceUrl: `${process.env.DATABASE_URL}?schema=my-db-schema`,
		});
		expect(PrismaClient).toHaveBeenCalledTimes(1);
	});
});
