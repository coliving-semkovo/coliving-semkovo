import { PrismaClient } from "@prisma/client";

export function dbURL(dbSchema: string): URL {
	if (!process.env.DATABASE_URL) {
		throw new Error("please provide a database url");
	}
	const dbURL = new URL(process.env.DATABASE_URL);
	dbURL.searchParams.set("schema", dbSchema);
	return dbURL;
}

export default function prismaClient(dbSchema: string): PrismaClient {
	return new PrismaClient({
		datasourceUrl: dbURL(dbSchema).toString(),
	});
}
