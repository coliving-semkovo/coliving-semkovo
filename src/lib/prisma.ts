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

// see https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
const prismaSingleton = globalThis.prismaGlobal ?? prismaClientSingleton();

function dbURL(dbSchema: string | null): URL {
	if (!process.env.DATABASE_URL) {
		throw new Error("please provide a database url");
	}
	if (!dbSchema) {
		throw new Error("null dbSchema should be an unreachable scenario");
	}
	const dbURL = new URL(process.env.DATABASE_URL);
	dbURL.searchParams.set("schema", dbSchema);
	return dbURL;
}

export default function prisma(): PrismaClient {
	const testdBSchemaHeaderName = "X-Test-DB-Schema";
	if (isProduction() || !headers().has(testdBSchemaHeaderName)) {
		return prismaSingleton;
	}
	const dbSchema = headers().get(testdBSchemaHeaderName);
	return new PrismaClient({ datasourceUrl: dbURL(dbSchema).toString() });
}

if (process.env.NODE_ENV === "development")
	globalThis.prismaGlobal = prismaSingleton;
