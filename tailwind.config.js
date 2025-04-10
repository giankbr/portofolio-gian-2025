/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Add these missing colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // Custom color palette
        primary: {
          100: '#e9d8fd',
          200: '#d6bcfa',
          300: '#b794f4',
          400: '#9f7aea',
          500: '#805ad5',
          600: '#6b46c1',
          700: '#553c9a',
          800: '#44337a',
          900: '#322659',
        },
        // Custom neutral colors for light/dark mode
        light: {
          bg: '#ffffff',
          card: '#f7f7f7',
          border: '#e5e5e5',
        },
        dark: {
          bg: '#121212',
          card: '#1e1e1e',
          border: '#2e2e2e',
        },
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-outfit)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: '500',
              '&:hover': {
                color: 'var(--tw-prose-links-hover)',
              },
            },
            code: {
              color: 'var(--tw-prose-code)',
              fontWeight: '500',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft-sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'soft-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 15px 25px rgba(0, 0, 0, 0.12)',
        'soft-2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
