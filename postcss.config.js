/* eslint-disable global-require */
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.css',
    './public/index.html',
  ],
  css: ['./src/tailwind.css'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content =>
    content.match(/[A-Za-z0-9-_:/\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
