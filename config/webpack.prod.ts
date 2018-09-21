import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"
import { config, paths } from "./webpack.common"

const prodConfig: Configuration = {
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

export default prodConfig
