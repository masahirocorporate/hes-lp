import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          white: '#FFFFFF',
          lightGray: '#F5F5F5',
        },
        text: {
          black: '#1A1A1A',
          darkGray: '#4A4A4A',
        },
        accent: {
          black: '#000000',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-jp)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
