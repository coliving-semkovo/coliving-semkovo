import { headers } from "next/headers";
import { isProduction } from "../lib/environment";

export const uniqueDBSchemaPerTestIfTesting = (): void => {
	const testdBSchemaHeaderName = "X-Test-DB-Schema";
	if (!isProduction() && headers().has(testdBSchemaHeaderName))
		console.log(headers().get(testdBSchemaHeaderName));
};
