const HtmlWebpackPlugin = require("html-webpack-plugin")
const { config, paths } = require("./webpack.common")

module.exports = {
  ...config,
  mode: "production",
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      hash: true,
      template: `${paths.config}/template.prod.htm`
    })
  ]
}
