/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'custom-gradient': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            },
            animation: {
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                pulse: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                },
            },
        },
    },
    plugins: [],
}
