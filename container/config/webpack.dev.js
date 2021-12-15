const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
    contentBase: "./public",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: { marketing: "marketing@http://localhost:8081/remoteEntry.js" },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
