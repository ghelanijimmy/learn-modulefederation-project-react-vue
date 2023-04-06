const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.ts");
import * as webpack from "webpack";
const deps = require("../package.json").dependencies;

const { ModuleFederationPlugin } = webpack.container;

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
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: {
        ...deps,
      },
    }),
  ],
};

module.exports = merge(common, devConfig);
