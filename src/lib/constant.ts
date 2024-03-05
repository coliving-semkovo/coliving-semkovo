import { env } from "@/env.mjs";

export const siteConfig = {
	title: "Coliving Semkovo",
	description:
		"Coliving Semkovo, located in the Bulgarian countryside, features 100 private apartments within a 16,700 square meter complex, tailored for remote workers who value both productivity and a fulfilling lifestyle. Situated in Semkovo, this coliving space offers an ideal setting for focused work, complemented by opportunities for making connections and building friendships in its expansive communal areas. Along with fostering a sense of community, it also provides skiing and other outdoor activities, creating a harmonious balance of work, social life, and leisure​​.",
	keywords: ["Coliving", "Mountains", "Semkovo"],
	url: env.NEXT_PUBLIC_SITE_URL || "https://example.com",
	googleSiteVerificationId: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID || "",
};
