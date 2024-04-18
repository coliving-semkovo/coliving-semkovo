import { test as base, expect } from "@playwright/test";
import prismaClient, { dbURL } from "../lib/prisma";
import { prismaDBPush } from "../lib/prisma-db-push";
import type { PrismaClient } from "@prisma/client";

/**
 * Playwright fixture exposing a Prisma client, pointing at a unique Postgres DB schema per individual test.
 * This allows end-to-end tests to run in isolation and in parallel.
 *
 * Adapted from: {@link https://blog.ludicroushq.com/a-better-way-to-run-integration-tests-with-prisma-and-postgresql}
 */
export const test = base.extend<{ prisma: PrismaClient }>({
	prisma: async ({ page }, use, testInfo) => {
		const dbSchema = `testid-${testInfo.testId};`;
		const prisma = prismaClient(dbSchema);
		const testdBSchemaHeaderName = "X-Test-DB-Schema";
		await prismaDBPush(dbURL(dbSchema).toString());
		await page.route("**/*", async (route) => {
			const headers = route.request().headers();
			headers[testdBSchemaHeaderName] = dbSchema;
			await route.continue({ headers });
		});

		await use(prisma);

		await prisma.$executeRawUnsafe(
			`DROP SCHEMA IF EXISTS "${dbSchema}" CASCADE;`,
		);
		await prisma.$disconnect();
	},
});

export { expect };
