import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		// @ts-ignore: TODO: investigate and fix the TypeScript check error
		NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
		// @ts-ignore: TODO: investigate and fix the TypeScript check error
		NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID: z.string().min(1).optional(),
		// @ts-ignore: TODO: investigate and fix the TypeScript check error
		NEXT_PUBLIC_GITHUB_ID: z.string().min(1).optional(),
		// @ts-ignore: TODO: investigate and fix the TypeScript check error
		NEXT_PUBLIC_GITHUB_SECRET: z.string().min(1).optional(),
	},
	runtimeEnv: {
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
		NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID:
			process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID,
		NEXT_PUBLIC_GITHUB_ID: process.env.NEXT_PUBLIC_GITHUB_ID,
		NEXT_PUBLIC_GITHUB_SECRET: process.env.NEXT_PUBLIC_GITHUB_SECRET,
	},
});
