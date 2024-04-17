import { PrismaClient } from "@prisma/client";

export default function prismaClient(dbSchema: string): PrismaClient {
	if (!process.env.DATABASE_URL) {
		throw new Error("please provide a database url");
	}
	const dbURL = new URL(process.env.DATABASE_URL);
	dbURL.searchParams.set("schema", dbSchema);
	return new PrismaClient({
		datasourceUrl: dbURL.toString(),
	});
}
