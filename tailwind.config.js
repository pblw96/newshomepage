/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: {
      "default": "hsla(var(--color-bg-default) / <alpha-value>)",
      "inverse": "hsla(var(--color-bg-inverse) / <alpha-value>)",
      "fill": "hsla(var(--color-bg-fill) / <alpha-value>)",
      "fill-hover": "hsla(var(--color-bg-fill-hover) / <alpha-value>)",
      "nav": "hsla(var(--color-nav-bg) / <alpha-value>)",
    },
    textColor: {
      "default": "hsla(var(--color-text-default) / <alpha-value>)",
      "default-inverse": "hsla(var(--color-text-default-inverse) / <alpha-value>)",
      "secondary": "hsla(var(--color-text-secondary) / <alpha-value>)",
      "secondary-inverse": "hsla(var(--color-text-secondary-inverse) / <alpha-value>)",
      "link": "hsla(var(--color-text-link) / <alpha-value>)",
      "link-hover": "hsla(var(--color-text-link-hover) / <alpha-value>)",
      "link-inverse": "hsla(var(--color-text-link-inverse) / <alpha-value>)",
      "link-inverse-hover": "hsla(var(--color-text-link-inverse-hover) / <alpha-value>)",
      "nav-link": "hsla(var(--color-text-nav-link) / <alpha-value>)",
      "nav-link-hover": "hsla(var(--color-text-nav-link-hover) / <alpha-value>)",
      "nav-link-active": "hsla(var(--color-text-nav-link-active) / <alpha-value>)",
      "brand": "hsla(var(--color-text-brand) / <alpha-value>)",
      "brand-variant": "hsla(var(--color-text-brand-variant) / <alpha-value>)",
      "on-bg-fill": "hsla(var(--color-text-on-bg-fill) / <alpha-value>)",
      "on-bg-fill-hover": "hsla(var(--color-text-on-bg-fill-hover) / <alpha-value>)",
    },
    fontSize: {
      ...defaultTheme.fontSize,
      base: "15px",
    }
  },
  plugins: [],
};
