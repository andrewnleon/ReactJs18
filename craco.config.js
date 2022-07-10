const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  style: {
    postOptions: {
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
      whitelistPatternsChildren: [/.*/],
      variables: true
    },
  },
};