import { expect, test } from "@playwright/test";
import prisma from "./lib/prisma";

test.beforeEach(async ({ page }, testInfo) => {
	await page.route("**/*", async (route) => {
		const headers = route.request().headers();
		headers["X-Test-DB-Schema"] = testInfo.testId;
		await route.continue({ headers });
	});
});

test("has Jim and Jane", async ({ page }) => {
	await prisma.user.upsert({
		where: { email: "jim@prisma.io" },
		update: {},
		create: {
			email: "jim@prisma.io",
			name: "Jim",
		},
	});
	await prisma.user.upsert({
		where: { email: "jane@prisma.io" },
		update: {},
		create: {
			email: "jane@prisma.io",
			name: "Jane",
		},
	});

	await page.goto("/users");

	await expect(page.getByText("Jim")).toBeVisible();
	await expect(page.getByText("Jane")).toBeVisible();
});
