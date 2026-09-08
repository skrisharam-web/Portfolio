/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#08080A',
        'bg-surface': '#16161A',
        'bg-surface-raised': '#202024',
        'border-subtle': '#2A2A2F',
        'border-default': '#3A3A40',
        'text-primary': '#FAFAF8',
        'text-secondary': '#B8B8BE',
        'text-tertiary': '#85858C',
        'accent': '#FFB454',
        'accent-muted-12': 'rgba(255, 180, 84, 0.12)',
        'accent-muted-24': 'rgba(255, 180, 84, 0.24)',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-plus-jakarta)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
