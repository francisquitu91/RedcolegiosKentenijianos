/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E5535A',    // Rojo Salmón - Para botones activos
          secondary: '#5C8BC0',  // Azul - Para gráficos/garabatos
          text: '#333333',       // Gris Oscuro
        },
        overlay: 'rgba(255, 255, 255, 0.85)', // Blanco transparente
      },
      spacing: {
        'header': '80px', // layout.headerHeight
      },
      height: {
        'header': '80px',
      },
      animation: {
        'draw': 'draw 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        draw: {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
