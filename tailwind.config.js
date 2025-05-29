/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
            background: '#FDF6F0', // fondo general
            primary: '#C94C72',    // rosa suave (títulos destacados)
            secondary: '#D7C4EB',  // lavanda pastel (resaltados o subtítulos)
            accent: '#C74B50',     // coral suave (líneas divisoras, botones)
            detail: '#C7E8CA',     // verde menta (detalles o etiquetas)
        },
      },
    },
  },
  plugins: [],
}

