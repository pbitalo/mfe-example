const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoader = require("vue-loader");
const FederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type",
    },
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.vue$/i,
        use: ["vue-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    new VueLoader.VueLoaderPlugin(),
    new FederationPlugin({
      name: "mfeVue",
      filename: "remoteEntry.js",
      exposes: {
        "./vueApp": "./src/bootstrap",
      },
    }),
  ],
};
