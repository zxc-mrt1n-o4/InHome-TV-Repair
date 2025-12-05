/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FF5722',
                    dark: '#E64A19',
                    light: '#FFAB91',
                },
                secondary: {
                    DEFAULT: '#FFF3E0',
                    dark: '#FFCCBC',
                    accent: '#D84315',
                }
            }
        },
    },
    plugins: [],
} 