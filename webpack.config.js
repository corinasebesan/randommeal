const path = require("path");

module.exports = {
  // The entry used to point at ./src/javascript/api/index.js, a path that has
  // never existed in this repository, so the build failed before it started.
  entry: "./src/app.ts",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    clean: false
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
        // Angular templates are compiled into the bundle rather than fetched at
        // runtime, so the built page is one HTML file and one script.
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  stats: {
    colors: true,
    errorDetails: true
  },
  devtool: "source-map"
};
