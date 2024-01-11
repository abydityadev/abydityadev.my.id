import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light': '#EDECEA',
        'dark': '#1A1A1A'
      },
      fontFamily: {
        'base': ['Rethink Sans']
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
}
export default config
