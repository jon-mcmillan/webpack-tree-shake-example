const webpack = require("webpack");

module.exports = {
  mode: "production",
  plugins: [
    new webpack.EnvironmentPlugin({
      FOO: {
        BAR: "hello nested",
      },
    }),
  ],
};
