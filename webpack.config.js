const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: __dirname + "/client",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "env"],
          plugins: [["styled-components"], ["babel-plugin-styled-components"]]
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  },
  output: {
    path: __dirname + "/static",
    filename: "bundle.js"
  }
};
