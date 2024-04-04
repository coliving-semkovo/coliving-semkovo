import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }, testInfo) => {
	await page.route("**/*", async (route) => {
		const headers = route.request().headers();
		headers["X-Test-DB-Schema"] = testInfo.testId;
		await route.continue({ headers });
	});
});

test("has title", async ({ page }) => {
	await page.goto("/");

	await expect(page).toHaveTitle(/Coliving Semkovo/);
});
