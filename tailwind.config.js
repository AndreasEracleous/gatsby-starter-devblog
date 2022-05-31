module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './src/content/blog/**/*.{md, mdx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1280px',
		},
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
			serif: ['Source Sans Pro', 'serif'],
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [],
}
