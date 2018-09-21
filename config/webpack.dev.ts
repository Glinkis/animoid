import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration, HotModuleReplacementPlugin } from "webpack"
import { config, cssLoader, paths } from "./webpack.common"

cssLoader.use = ["style-loader", "css-loader", "sass-loader"]

const devConfig: Configuration = {
  ...config,
  // @ts-ignore
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

export default devConfig
