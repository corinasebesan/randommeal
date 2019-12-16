const path = require("path");

module.exports = {
  entry: "./src/javascript/api/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
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
  resolve: {
    extensions: [".js", ".ts"]
  },
  stats: {
    colors: true,
    errorDetails: true
  },
  devtool: "source-map"
};
