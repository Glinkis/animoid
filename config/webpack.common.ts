import { Configuration } from "webpack";
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
        loader: "ts-loader",
        exclude: /node_modules/
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
  }
} as Configuration;
