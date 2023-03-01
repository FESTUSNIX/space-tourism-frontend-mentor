/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1280px',
			'2xl': '1600px'
		},
		fontFamily: {
			serif: ['Bellefair', ...defaultTheme.fontFamily.serif],
			sans: ['Barlow Condensed', 'sans-serif']
		},
		extend: {
			colors: {
				dark: '#0B0D17',
				secondary: '#D0D6F9'
			}
		}
	},
	plugins: []
}
