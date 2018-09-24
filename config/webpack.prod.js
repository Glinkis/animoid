const HtmlWebpackPlugin = require("html-webpack-plugin")
const { tsLoader, config, paths } = require("./webpack.common")

tsLoader.use = {
  loader: "babel-loader",
  options: {
    plugins: [["react-remove-properties", { properties: ["data-cy"] }]]
  }
}

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
