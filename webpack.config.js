const path = require("path")

module.exports = {
  mode: 'development',
  entry : "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  }
}