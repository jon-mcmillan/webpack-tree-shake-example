const webpack = require("webpack");

module.exports = {
  mode: "production",
  plugins: [
    new webpack.EnvironmentPlugin({
      PARTNER: "partner-a",
    }),
  ],
};
