const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  style: {
    postCss: {
      plugins: [
        purgecss({
          content: [
            './src/index.js', 
            './src/App.js', 
            './src/**/*.js', 
            './src/**/*.jsx', 
            './public/index.html',
            './node_modules/bootstrap/js/dist/*.js'
          ]
        })
      ],
      whitelistPatternsChildren: [/navbar-*/],
      variables: true
    },
  },
};