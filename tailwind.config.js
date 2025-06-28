module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f6f1e7',
        beige: '#e8d5b0',
        navy: '#1b1f30',
        gold: '#ffd700',
        graphite: '#3a3a3a',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif']
      }
    }
  },
  plugins: []
};