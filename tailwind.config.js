/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'main-gray': '#474955',
        active: '#7EBC3C',
        'main-white': '#FFF',
        'search-gray': '#B2B7BF'
      },
      backgroundColor: {
        'header-gray': '#474955',
        'main-gray': '#E3E6EC',
        'main-white': '#FFF',
        'search-gray': '#5A5C66'
      },
      borderColor: {
        'main-gray': '#E3E6EC'
      },
      maxWidth: {
        id: '110px',
        title: '529px',
        description: '432px'
      },
      height: {
        cell: '87px'
      }
    },
  },
  plugins: [],
}

