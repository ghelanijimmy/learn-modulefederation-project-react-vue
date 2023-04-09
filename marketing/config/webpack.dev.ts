const { merge } = require("webpack-merge");
const common = require("./webpack.common.ts");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
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
