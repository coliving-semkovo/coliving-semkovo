import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
	const testdBSchemaHeaderName = "X-Test-DB-Schema";
	if (!isProduction() && request.headers.has(testdBSchemaHeaderName))
		console.log(request.headers.get(testdBSchemaHeaderName));

	function isProduction() {
		return process.env.VERCEL_ENV === "production";
	}
}
