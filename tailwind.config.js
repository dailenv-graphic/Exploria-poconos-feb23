/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ice: {
          100: '#d4f0ee',
          200: '#a8e0dc',
          300: '#6dccc7',
          400: '#41b8b2',
          500: '#35a29c',
          600: '#2a8a85',
          700: '#227470',
          900: '#1a5753',
          950: '#0f3633',
        },
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
