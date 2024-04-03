// @ts-check
const { z } = require("zod");

if (typeof window !== "undefined") {
	throw new Error(
		"src/server/config.js must not be imported on the frontend (as it validates server-side vars).",
	);
}

const Config = z.object({
	DATABASE_URL: z.string(),
});

const config = Config.parse(process.env);

module.exports.config = config;
