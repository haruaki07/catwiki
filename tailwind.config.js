const {
	fontFamily: { sans },
} = require("tailwindcss/defaultTheme");
const enabled = process.env.NODE_ENV === "production";

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		enabled,
		content: ["./src/**/*.html", "./src/**/*.svelte"],
	},
	theme: {
		fontFamily: {
			sans: ["Noto Sans", ...sans],
		},
		extend: {},
	},
	variants: {},
	plugins: [],
};
