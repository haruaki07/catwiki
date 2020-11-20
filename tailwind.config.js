const enabled = process.env.NODE_ENV === "production";

// primary: #291507
// primary-dark: #544439
// primary-darker: #4D270C
// primary-light: #DEC68B
// primary-lightest: #E0E0E0
// primary-lighter: #E3E1DC

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
			sans: ['"Montserrat"', "sans-serif"],
		},
		extend: {
			colors: {
				"primary-darker": "#4D270C",
				"primary-dark": "#544439",
				primary: "#291507",
				"primary-light": "#DEC68B",
				"primary-lighter": "#E3E1DC",
				"primary-lightest": "#E0E0E0",
			},
		},
	},
	variants: {},
	plugins: [],
};
