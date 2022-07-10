const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  style: {
    postCss: {
      plugins: [
        purgecss({
          content: [
            './src/App.js', 
            './src/**/*.js', 
            './public/index.html']
        })
      ],
      whitelistPatternsChildren: [/navbar.*/],
      variables: true
    },
  },
};