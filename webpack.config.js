const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "production";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    title: 'Webpack App',
    template: "./public/index.html",
    filename: 'index.html',
  }),
];
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new ReactRefreshWebpackPlugin());
}
module.exports = {
  mode: mode,
  entry: {
    bundle: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].js',
    // assetModuleFilename: "img/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "src/scss/*.scss" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      }, 
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            /**
             * From the docs: When set, the given directory will be used
             * to cache the results of the loader. Future webpack builds
             * will attempt to read from the cache to avoid needing to run
             * the potentially expensive Babel recompilation process on each run.
             */
            cacheDirectory: false,
          },
        },
      },
    ],
  },
  plugins: plugins,
  target: target,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: "build",
    hot: true,
  },
};
