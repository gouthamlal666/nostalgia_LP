/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        // brand navy #001024 with a deeper and two lighter steps for cards and lines
        ink: { DEFAULT: '#001024', deep: '#000a18', 2: '#061b3d', 3: '#0c2852' },
        gold: { light: '#F0D58E', DEFAULT: '#C79942', dark: '#A07628' },
        mist: '#f5f7fb',
      },
    },
  },
}
