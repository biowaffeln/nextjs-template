const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		standardFontWeights: true,
		defaultLineHeights: true,
	},
	experimental: {
		applyComplexClasses: true,
	},
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
	variants: {},
	plugins: [],
};
