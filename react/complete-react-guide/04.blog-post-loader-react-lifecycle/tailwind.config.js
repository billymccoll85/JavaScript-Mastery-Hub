module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure Tailwind checks all your component files
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
