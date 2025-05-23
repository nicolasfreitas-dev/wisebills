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
                primary: "#0F0E11",
                secondary: "#141414",
                terciary: "#71717A",
                quaternary: "#55B02E",
                darkGray: "#1F1F21",
                cash: "#55B02E",
                darkGreen: "#161716",
                expense: "#E93030",
                expenseWithOpacity: "rgba(246, 53, 46, 0.08)",
                witheWithOpacity: "rgba(255, 255, 255, 0.08)",
            },
            fontFamily: {
                Mulish: ["Mulish", "sans-serif"],
            },
        },
    },
    plugins: [],
};
