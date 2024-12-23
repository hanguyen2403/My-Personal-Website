/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Bai Jamjuree"', 'sans-serif'], // Add Bai Jamjuree as the body font
      },
      colors: {
        'first-color': 'var(--first-color)',
        'dark-blue-color': 'var(--dark-blue-color)',
        'black-color-light': 'var(--black-color-light)',
        'dark-beige-color': 'var(--dark-beige-color)',
        'light-beige-color': 'var(--light-beige-color)',
        'blue2-color': 'var(--blue2-color)',
        'blue3-color': 'var(--blue3-color)',
        'blue4-color': 'var(--blue4-color)',
        'light-blue-color': 'var(--light-blue-color)',
        'light-text-color': 'var(--light-text-color)',
        'dark-text-color': 'var(--dark-text-color)',
        'placeholder-color': 'var(--placeholder-color)',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

