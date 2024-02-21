// tailwind.config.js

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
    ],
  },
  // Other Tailwind CSS settings...
}
