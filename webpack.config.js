const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, '/src/client/index.jsx'),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },

    ]
  },
  resolve: { extensions: [".*", ".js", ".jsx", ".css"] },
  output: {
    path: path.join(__dirname,"src/client/public"),
    publicPath: "/dist/",
    filename: "bundle.js"
  }
};