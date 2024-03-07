import { PrismaClient } from "@prisma/client";

/* eslint-disable no-var */
declare global {
	// biome-ignore lint/style/noVar: This rule is also disabled for ESLint. Will investigate later
	var prisma: PrismaClient | undefined;
}
/* eslint-enable no-var */

// biome-ignore lint/suspicious/noRedeclare: to be investigated later
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
