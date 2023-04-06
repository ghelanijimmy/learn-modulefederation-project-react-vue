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
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: {
        ...deps,
      },
    }),
  ],
};

module.exports = merge(common, devConfig);
