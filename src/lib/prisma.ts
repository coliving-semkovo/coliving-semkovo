import { PrismaClient } from "@prisma/client";
import { isProduction } from "./environment";

const prismaClientSingleton = () => {
	return new PrismaClient();
};

/* eslint-disable no-var */
declare global {
	var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}
/* eslint-enable no-var */

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

/* The example in the Prisma docs uses `globalThis` whenever `NODE_ENV` is not "production",
   but that is too restrictive for us, as for instance the Vercel preview environments
   would be deemed production. We need Prisma on the `globalThis` object for all environments
   (including Vercel preview environments), so we can inject a new Prisma client with a
   unique DB schema when running Playwright tests.
 */
if (!isProduction()) globalThis.prismaGlobal = prisma;
