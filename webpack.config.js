const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

};
