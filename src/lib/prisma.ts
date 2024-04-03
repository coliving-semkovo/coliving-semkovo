import { PrismaClient } from "@prisma/client";

/* eslint-disable no-var */
declare global {
	var prisma: PrismaClient | undefined;
}
/* eslint-enable no-var */

// biome-ignore lint/suspicious/noRedeclare: to be investigated later
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
