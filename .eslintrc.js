module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"next/core-web-vitals",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:tailwindcss/recommended",
	],
	plugins: ["simple-import-sort", "@typescript-eslint"],
	rules: {
		"sort-imports": "off",
		// turned off mixed spaces and tabs checking as it was conflicting with Biome,
		// because of ternary handling it looks like:
		// https://github.com/biomejs/biome/issues/1661
		"no-mixed-spaces-and-tabs": "off",
		"tailwindcss/no-custom-classname": "off",
		"@typescript-eslint/no-var-requires": "off",
		"simple-import-sort/imports": [
			2,
			{
				groups: [
					["^.+\\.s?css$"],
					[
						`^(${require("node:module").builtinModules.join("|")})(/|$)`,
						"^react",
						"^@?\\w",
					],
					["^components(/.*|$)"],
					["^lib(/.*|$)", "^hooks(/.*|$)"],
					["^\\."],
				],
			},
		],
	},
	settings: {
		tailwindcss: {
			callees: ["cn"],
			config: "tailwind.config.js",
		},
	},
};
