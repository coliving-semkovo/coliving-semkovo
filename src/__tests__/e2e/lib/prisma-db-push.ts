import { promisify } from "node:util";
import { exec as execCb } from "node:child_process";

// this file is inspired by this example:
// https://github.com/prisma/prisma/issues/4703#issuecomment-1447354363

const exec = promisify(execCb);

// TODO: re-write this if/when Prisma.io gets a programmatic db push API
// https://github.com/prisma/prisma/issues/4703
export async function prismaDBPush(databaseUrl: string): Promise<void> {
	// throws an error if db push fails
	const { stdout, stderr } = await exec("npx prisma db push --skip-generate", {
		env: {
			...process.env,
			DATABASE_URL: databaseUrl,
		},
	});
	// console.log(stdout)
	// console.log(stderr)
}
