const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.ts");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(common, devConfig);
