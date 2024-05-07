const { NormalModuleReplacementPlugin, IgnorePlugin } = require("webpack");

module.exports = {
  target: "node",
  devtool: "source-map",
  externals: ["mysql"],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new NormalModuleReplacementPlugin(
      /mssql?|oracle(db)?|sqlite3|pg|pg-(native|query)/,
      "noop2"
    ),
    new IgnorePlugin({
      resourceRegExp: /cardinal/,
    }),
  ],
}