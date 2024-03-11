/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placebeard.it",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/search",
				destination: "/",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
