const path = require('path');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public/index.html"),
    filename: "./index.html"
});

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/server/serverprod.js', // sets this to the server entry point
  target: 'node', // tells webpack this bundle will be used in nodejs environment.
  externals: [nodeExternals()], // Omits node_modules code from the bundle
  output: {
    path: path.resolve('build'),
    filename: 'serverBundle.js',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimizer: [
      // A custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
      {
          test: /\.(ttf|eot|otf|svg|png)$/,
          loader: 'file-loader?emitFile=false'
      },
      {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader?emitFile=false'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [ 
    new ExtractTextPlugin(
      {filename: 'style.css'}
    ),
    htmlWebpackPlugin
  ]
};