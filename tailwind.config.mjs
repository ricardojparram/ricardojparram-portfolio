/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        slater: "#0d1521",
        primary: "#50cf61",
        secondary: "#98f28c",
      },
    },
  },
  plugins: [],
};
