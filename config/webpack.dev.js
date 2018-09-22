const HtmlWebpackPlugin = require("html-webpack-plugin")
const { HotModuleReplacementPlugin } = require("webpack")
const { config, cssLoader, paths } = require("./webpack.common")

cssLoader.use = [
  "style-loader",
  "css-loader?sourceMap",
  "sass-loader?sourceMap"
]

module.exports = {
  ...config,
  devServer: {
    host: "0.0.0.0",
    hot: true,
    port: 3000
  },
  devtool: "source-map",
  mode: "development",
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: `${paths.config}/template.dev.htm`
    }),
    new HotModuleReplacementPlugin()
  ]
}
