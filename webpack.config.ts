import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";

export default {
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/view/template.htm"
    })
  ]
} as Configuration;
