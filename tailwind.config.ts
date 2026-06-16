import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#08111F',
          900: '#0F1E35',
          800: '#132347',
          700: '#1A3060',
        },
        orange: {
          500: '#E8650A',
          hover: '#CF5408',
        },
        muted: '#8FA3BF',
        bright: '#D6E4F5',
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'Sora', 'sans-serif'],
        display: ['var(--font-sora)', 'Sora', 'sans-serif'],
        body: ['var(--font-sora)', 'Sora', 'sans-serif'],
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
    },
  },
  plugins: [forms],
}

export default config
