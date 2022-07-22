const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ServiceWorkerPlugin } = require("service-worker-webpack");
const paths = require("./paths");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.js"],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "./build",
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    //Service Worker
    new ServiceWorkerPlugin({
      enableWorkboxLogging: true,
    }),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/manifest.json",
          to: "",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
          noErrorOnMissing: true,
        },
        {
          from: "./public/assets/logos",
          to: "assets/logos",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
          noErrorOnMissing: true,
        },
        {
          from: "./public/data",
          to: "data",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
          noErrorOnMissing: true,
        },
        {
          from: "./src/logo.svg",
          to: "",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      baseUrl: '/',
      template: "./public/index.html",
      templateParameters(compilation, assets, options) {
        return {
          compilation,
          webpack: compilation.getStats().toJson(),
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            files: assets,
            options,
          },
          process,
        }
      },
      filename: "index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
      chunksSortMode: 'auto',
      minify: {
        collapseWhitespace: false,
      },
      cache: true,
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      //JSON
      { test: /\.json$/, use: ["json-loader"], type: "javascript/auto" },

      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.(js|jsx)$/, use: ["babel-loader"] },

      // Images: Copy image files to build folder
      { test: /\.(gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },

  resolve: {
    modules: [paths.src, "node_modules"],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": paths.src,
      assets: paths.public,
    },
  },
};
