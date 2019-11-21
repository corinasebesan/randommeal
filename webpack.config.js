const path = require("path");

module.exports = {
  entry: "./src/javascript/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader", options: { cacheDirectory: true } }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
