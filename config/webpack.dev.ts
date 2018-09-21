import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"
import { config, paths } from "./webpack.common"

const devConfig: Configuration = {
  ...config,
  // @ts-ignore
  devServer: {
    host: "0.0.0.0",
    port: 3000
  },
  devtool: "source-map",
  mode: "development",
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: `${paths.config}/template.dev.htm`
    })
  ]
}

export default devConfig
