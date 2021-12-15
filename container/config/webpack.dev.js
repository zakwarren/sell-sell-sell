const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const port = 8080;

const devConfig = {
  mode: "development",
  output: { publicPath: `http://localhost:${port}/` },
  devtool: "eval-source-map",
  devServer: {
    port: port,
    historyApiFallback: {
      index: "/index.html",
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
