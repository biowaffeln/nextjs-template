const { container } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/** @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig */

/** @type {TailwindConfig} */
module.exports = {
	purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
		},
		letterSpacing: {
			tighter: "-0.025em",
			tight: "-0.0125em",
			normal: "0",
			wide: "0.0125em",
			wider: "0.025em",
		},
		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem" }],
			sm: ["0.875rem", { lineHeight: "1.25rem" }],
			base: ["1rem", { lineHeight: "1.5rem" }],
			lg: ["1.25rem", { lineHeight: "1.75rem" }],
			xl: ["1.5rem", { lineHeight: "2rem" }],
			"2xl": ["2.125rem", { lineHeight: "2.5rem" }],
			"3xl": ["3rem", { lineHeight: "1" }],
			"4xl": ["3.75rem", { lineHeight: "1" }],
			huge: ["4.75rem", { lineHeight: "1" }],
		},
	},
	corePlugins: {
		container: false,
	},
	variants: {},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				".container": {
					width: "100%",
					marginLeft: "auto",
					marginRight: "auto",
					paddingLeft: "1.25rem",
					paddingRight: "1.25rem",
					"@screen sm": {
						maxWidth: "640px",
					},
					"@screen md": {
						maxWidth: "768px",
					},
					"@screen lg": {
						maxWidth: "1024px",
					},
					"@screen xl": {
						maxWidth: "1280px",
					},
				},
			});
		},
	],
};
