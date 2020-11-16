const production = process.env.NODE_ENV === "production";

module.exports = {
	plugins: [
		require("tailwindcss"),
		require("postcss-nested"),
		production ? require("cssnano") : null,
		production ? require("autoprefixer") : null,
	],
};
