/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 40%, #ccfbf1 100%)',
        'gradient-cta': 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(20,184,166,0.08) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(14, 165, 233, 0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 16px 40px rgba(14,165,233,0.18)',
        'feature': '0 2px 16px rgba(14,165,233,0.10)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
