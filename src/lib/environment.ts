/**
 * Returns true if the application environment is the real live production environment.
 *
 * @remarks
 * The `NODE_ENV` environment variable is not useful for this, as Next.js sets `NODE_ENV` to
 * `production` in any environment that is built with `next build`.
 *
 * @returns true if the application environment is the real live production environment
 *
 */
export function isProduction(): boolean {
	console.log("isProduction is invoked");
	return process.env.VERCEL_ENV === "production";
}
