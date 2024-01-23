/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
// prettier.config.js
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: ['*.html', '*.xml', '*.jsx', '*.tsx'],
      options: {
        parser: 'html',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
};
