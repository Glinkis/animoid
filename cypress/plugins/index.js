const webpackPreprocessor = require("@cypress/webpack-preprocessor")
const { config } = require("../../config/webpack.common.js")

delete config.optimization
config.devtool = "eval-source-map"

module.exports = on => {
  on(
    "file:preprocessor",
    webpackPreprocessor({
      webpackOptions: config
    })
  )
}
