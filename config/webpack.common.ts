import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

export const paths = {
  config: path.resolve(__dirname),
  project: path.resolve(__dirname, "../")
};

export const config = {
  entry: `${paths.project}/src`,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: "ts-loader"
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
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
} as Configuration;
