/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        lightBlue: '#85d7ff',
        darkBlue: '#1fb6ff',
      },
      boxShadow: {
        'custom-xy': '10px 10px 20px rgba(0, 0, 0, 0.2)', 
      },
      borderRadius: {
        'custom': '10px',
      },
    },
  },
  plugins: [],
}

