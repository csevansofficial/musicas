/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      aspectRatio: {
        '16/9': '16 / 9',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        glass: '10px',
      },
      fontSize: {
        sm: ['0.875rem', '1.25rem'], // 12.25px com altura de linha 1.25rem
        base: ['1rem', '1.5rem'], // 14px com altura de linha 1.5rem
        lg: ['1.125rem', '1.75rem'], // 15.75px com altura de linha 1.75rem
        xl: ['1.25rem', '1.75rem'], // 17.5px com altura de linha 1.75rem
        '2xl': ['1.5rem', '2rem'], // 21px com altura de linha 2rem
        '3xl': ['1.875rem', '2.25rem'], // 26.25px com altura de linha 2.25rem
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-filters'),
  ],
}