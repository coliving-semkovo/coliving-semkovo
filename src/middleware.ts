import type { NextRequest } from "next/server";
import { isProduction } from "./lib/environment";

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
	const testdBSchemaHeaderName = "X-Test-DB-Schema";
	if (!isProduction() && request.headers.has(testdBSchemaHeaderName))
		console.log(request.headers.get(testdBSchemaHeaderName));
}
