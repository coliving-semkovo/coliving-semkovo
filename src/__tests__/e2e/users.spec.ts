import type { PrismaClient } from "@prisma/client";
import { test, expect } from "./fixtures/prisma.fixture";
import type { Page } from "@playwright/test";

function toEmail(name: string): string {
	return `${name.toLowerCase()}@prisma.io`;
}

async function addUser(name: string, prisma: PrismaClient): Promise<void> {
	await prisma.user.upsert({
		where: { email: toEmail(name) },
		update: {},
		create: {
			email: toEmail(name),
			name: name,
		},
	});
}

async function expectNumberOfUsersToBe(number: number, page: Page) {
	const usersList = page.getByRole("listitem");
	await expect(usersList).toHaveCount(number);
}

test("has just Jim and Jane", async ({ prisma, page }) => {
	await addUser("Jim", prisma);
	await addUser("Jane", prisma);

	await page.goto("/users");

	await expect(page.getByText("Jim")).toBeVisible();
	await expect(page.getByText("Jane")).toBeVisible();

	await expectNumberOfUsersToBe(2, page);
});

test("has just Alice", async ({ prisma, page }) => {
	await addUser("Alice", prisma);

	await page.goto("/users");

	await expect(page.getByText("Alice")).toBeVisible();

	await expectNumberOfUsersToBe(1, page);
});
