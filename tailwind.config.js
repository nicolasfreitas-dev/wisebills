/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "bg-primary": "#0F0E11",
                "bg-secondary": "#141414",
                "gray-detail": "#71717A",
                "green-detail": "#55B02E",
                "bg-cash": "#161716",
                "expense-color": "#E93030",
                "bg-expense-color": "rgba(246, 53, 46, 0.08)",
                "primary-text-color": "#FFFFFF",
                "border-color": "rgba(255, 255, 255, 0.08)",
            },
            fontFamily: {
                Mulish: ["Mulish", "sans-serif"],
            },
        },
    },
    plugins: [],
};
