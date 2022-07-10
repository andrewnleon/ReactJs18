const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  style: {
    postCss: {
      plugins: [
        purgecss({
          content: ['./src/**/*.js', './public/index.html']
        }),
      ],
    },
  },
};