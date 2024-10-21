import plugin from "tailwindcss/plugin";

/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: "hsl(from var(--accent-color) h s l / <alpha-value>)",
                background: "hsl(from var(--background-color) h s l / <alpha-value>)",
                text: "hsl(from var(--text-color) h s l / <alpha-value>)",
                border: "hsl(from var(--border-color) h s l / <alpha-value>)",
                footerContent: "hsl(from var(--footer-content-color) h s l / <alpha-value>)",
            },
            fontFamily: {
                kinetika: ["var(--font-kinetika)", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [
        plugin(({ addVariant }) => {
            addVariant("hocus", ["&:hover", "&:focus"]);
        }),
    ],
}