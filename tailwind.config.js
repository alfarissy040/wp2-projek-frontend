/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};