import HtmlWebpackPlugin from "html-webpack-plugin";
import { config, paths } from "./webpack.common";
import { Configuration } from "webpack";

export default {
  ...config,
  mode: "development",
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0",
    port: 3000
  },
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: `${paths.config}/template.dev.htm`
    })
  ]
} as Configuration;
