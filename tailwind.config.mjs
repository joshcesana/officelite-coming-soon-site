/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                // Brand palette
                primary: "#5175FF",
                "primary-light": "#829CFF",
                "dark-blue": "#333950",
                "blue-gray": "#747895",
                "dark-navy": "#25293A",
                error: "#F05B5B",
            },
            fontFamily: {
                serif: ["Kumbh Sans", ...defaultTheme.fontFamily.serif],
            },
            fontSize: {
                // Headings
                h1: ["56px", { lineHeight: "64px" }],
                "h1-mobile": ["40px", { lineHeight: "48px" }],
                h2: ["20px", { lineHeight: "28px" }],
                h3: ["16px", { lineHeight: "48px", letterSpacing: "5px", textTransform: "uppercase" }],

                // Body
                body1: ["18px", { lineHeight: "28px" }],
                body2: ["16px", { lineHeight: "28px" }],
            },
            maxWidth: {
                container: "1110px", // 69.375rem
            },
            screens: {
                xl: "1110px",
            },
            dropShadow: {
                "primary-button": "0 25px 25px rgba(63, 91, 194, 0.2472)",
            },
            boxShadow: {
                dropdown: "0px 50px 50px -25px rgba(75, 92, 154, 0.7471)",
            },
            backgroundOpacity: {
                15: "0.15",
            },
        },
    },
    plugins: [],
}
