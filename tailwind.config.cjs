/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		extend: {
			fontFamily: {
				"Inter": ["Inter", "sans-serif"],
			},
			screens: {
				"lg": "950px",

				"sm": "590px",
			},
		},
	},
	plugins: [],
};
