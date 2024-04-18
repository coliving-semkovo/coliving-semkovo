import { test, expect } from "./fixtures/prisma.fixture";

test("has just Jim and Jane", async ({ prisma, page }) => {
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

	const usersList = page.getByRole("listitem");
	await expect(usersList).toHaveCount(2);
});

test("has just Alice and Bob", async ({ prisma, page }) => {
	await prisma.user.upsert({
		where: { email: "alice@prisma.io" },
		update: {},
		create: {
			email: "alice@prisma.io",
			name: "Alice",
		},
	});
	await prisma.user.upsert({
		where: { email: "bob@prisma.io" },
		update: {},
		create: {
			email: "bob@prisma.io",
			name: "Bob",
		},
	});

	await page.goto("/users");

	await expect(page.getByText("Alice")).toBeVisible();
	await expect(page.getByText("Bob")).toBeVisible();

	const usersList = page.getByRole("listitem");
	await expect(usersList).toHaveCount(2);
});
