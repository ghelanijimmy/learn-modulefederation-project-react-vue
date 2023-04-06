const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.ts");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(common, devConfig);
