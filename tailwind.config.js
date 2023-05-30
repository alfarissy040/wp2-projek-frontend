/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                gray: "#e3e0f3",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
