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
    title: "Andrew Leonberger | Portfolio",
    template: "./public/index.html",
    filename: "index.html",
  }),
];
if (process.env.NODE_ENV === "production") {
  mode = "development";
}
if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new ReactRefreshWebpackPlugin());
}
module.exports = {
  mode: mode,
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle[contenthash].js",
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { 
              publicPath: ""
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
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
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname,'build'),
    },
    port:3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};