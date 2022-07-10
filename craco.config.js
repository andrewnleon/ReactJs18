const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: [
            './public/index.html',
            './src/index.js', 
            './src/App.js', 
            './src/**/*.js', 
            '../../node_modules/bootstrap/js/dist/*.js'
          ]
        })
      ],
      whitelistPatternsChildren: [/navbar.*/],
      variables: true
    },
  },
};