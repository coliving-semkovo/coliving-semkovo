import { PrismaClient } from "@prisma/client";

declare global {
	// biome-ignore lint/style/noVar: ESLint was also ignoring this line
	var prisma: PrismaClient | undefined;
}

// biome-ignore lint/suspicious/noRedeclare: to be investigated later
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
