/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		extend: {
			fontFamily: {
				"Inter": ["Inter", "sans-serif"],
			},
			bgGradientDeg: {
				0: "0deg",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-gradient": (angle) => ({
						"background-image": `conic-gradient(transparent ${angle}, white ${angle})`,
					}),
				},
				{
					values: Object.assign(theme("bgGradientDeg", {}), {
						40: "40deg",
						80: "80deg",
						120: "120deg",
						160: "160deg",
						200: "200deg",
						240: "240deg",
						280: "280deg",
						320: "320deg",
						360: "360deg",
					}),
				}
			);
		}),
	],
};
