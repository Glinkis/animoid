import MiniCssExtractPlugin from "mini-css-extract-plugin"
import path from "path"
import { Configuration } from "webpack"

export const paths = {
  config: path.resolve(__dirname),
  project: path.resolve(__dirname, "../")
}

export const config: Configuration = {
  entry: `${paths.project}/src`,
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: "[id].css",
      filename: "[name].css"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  }
}
