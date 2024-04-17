import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { isProduction } from "./environment";

const prismaClientSingleton = () => {
	return new PrismaClient({
		datasourceUrl: process.env.DATABASE_URL,
	});
};

/* eslint-disable no-var */
declare global {
	var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}
/* eslint-enable no-var */

const hotReloadSafePrismaSingleton =
	globalThis.prismaGlobal ?? prismaClientSingleton();

export default function prisma(): PrismaClient {
	const testdBSchemaHeaderName = "X-Test-DB-Schema";
	if (isProduction() || !headers().has(testdBSchemaHeaderName)) {
		console.log("Not playwright mode");
		return hotReloadSafePrismaSingleton;
	}
	console.log("Playwright mode");
	if (!process.env.DATABASE_URL) {
		throw new Error("please provide a database url");
	}
	const dbSchema = headers().get(testdBSchemaHeaderName) ?? "public";
	const dbURL = new URL(process.env.DATABASE_URL);
	dbURL.searchParams.set("schema", dbSchema);
	console.log(`database url with schema: ${dbURL}`);
	return new PrismaClient({
		datasourceUrl: dbURL.toString(),
	});
}

/* The example in the Prisma docs uses `globalThis` whenever `NODE_ENV` is not "production",
   but that is too restrictive for us, as for instance the Vercel preview environments
   would be deemed production. We need Prisma on the `globalThis` object for all environments
   (including Vercel preview environments), so we can inject a new Prisma client with a
   unique DB schema when running Playwright tests.
 */
if (!isProduction()) globalThis.prismaGlobal = hotReloadSafePrismaSingleton;
