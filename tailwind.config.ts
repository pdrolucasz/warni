import type { Config } from "tailwindcss"

import plugin from "tailwindcss/plugin"

const config: Config = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			gridTemplateRows: {
				app: "5rem 1fr",
			},
			keyframes: {
				rotateText: {
					"0%": { top: "100%", opacity: "0" },
					"4%": { top: "0%", opacity: "1" },
					"25%": { top: "0%", opacity: "1" },
					"29%": { top: "-100%", opacity: "0" },
					"100%": { top: "-100%", opacity: "0" },
				},
			},
			animation: {
				rotateText: "rotateText 6s linear infinite",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"animate-delay": (value) => ({
						animationDelay: value,
					}),
				},
				{ values: theme("transitionDelay") },
			)
		}),
	],
}
export default config
