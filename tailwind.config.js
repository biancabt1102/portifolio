/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-blue': '#0048A7',
        'bg-dark-blue': '#001029',
        'banner': '#E1EAF4',
        'bg-banner-img': '#BBE6E4',
        'bg-form': 'rgba(66,191,221,0.75)',
        'text-brown': '#3C3C3C',
        'bg-button-github': 'rgba(187, 230, 228, 0.70)',
        'text-placeholder':'#3C3C3C',
        'bg-projetos':'#64B5F6',
        'bg-projetos-dark':'rgba(100,181,246,0.38)',
      }
    },
  },
  plugins: [],
}

