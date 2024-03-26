// @ts-check
const { z } = require("zod");

const Config = z.object({
	DATABASE_URL: z.string(),
});

const config = Config.parse(process.env);

module.exports.config = config;
