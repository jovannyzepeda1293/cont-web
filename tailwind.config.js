/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms, typography, containerQueries],
}
