const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
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

    //Env
    new Dotenv({ systemvars: true }),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/config/azure",
          to: "",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
          noErrorOnMissing: true,
        },
        {
          from: "./.env",
          to: "",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
          noErrorOnMissing: true,
        },
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
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
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
    extensions: [".js", ".jsx", ".json", ".config"],
    alias: {
      "@": paths.src,
      assets: paths.public,
    },
  },
};
