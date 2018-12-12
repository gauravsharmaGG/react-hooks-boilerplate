const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public/index.html"),
    filename: "./index.html"
});

const WebpackDevServerUrl = 'http://localhost:8080';

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
          test: /\.(ttf|eot|otf|svg|png)$/,
          loader: 'file-loader'
      },
      {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: `${WebpackDevServerUrl}/`,
    filename: 'bundle.js'
    },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
    contentBase: './public',
    hot: true
    }
};