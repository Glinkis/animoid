import MiniCssExtractPlugin from "mini-css-extract-plugin"
import path from "path"
import { Configuration } from "webpack"

export const paths = {
  config: path.resolve(__dirname),
  project: path.resolve(__dirname, "../")
}

export const tsLoader = {
  test: /\.tsx?$/,
  use: "ts-loader"
}

export const cssLoader = {
  test: /\.(sa|sc|c)ss$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
}

export const config: Configuration = {
  entry: `${paths.project}/src`,
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [tsLoader, cssLoader]
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
