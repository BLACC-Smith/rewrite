// eslint-disable-next-line no-undef
module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'darryl-red-900': '#B71C1C',
				'darryl-red-50': '#FFEBEE',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
