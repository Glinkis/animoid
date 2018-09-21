// @ts-check
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const paths = {
  config: path.resolve(__dirname),
  project: path.resolve(__dirname, "../")
};

const tsLoader = {
  exclude: /node_modules/,
  test: /\.tsx?$/,
  use: "babel-loader"
};

const cssLoader = {
  exclude: /node_modules/,
  test: /\.(sa|sc|c)ss$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
};

const config = {
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
};

module.exports = {
  paths,
  tsLoader,
  cssLoader,
  config
};
