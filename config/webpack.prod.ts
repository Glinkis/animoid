import HtmlWebpackPlugin from "html-webpack-plugin";
import { config, paths } from "./webpack.common";
import { Configuration } from "webpack";

export default {
  ...config,
  mode: "production",
  plugins: [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: `${paths.config}/template.prod.htm`,
      hash: true
    })
  ]
} as Configuration;
