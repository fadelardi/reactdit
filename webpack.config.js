var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  output: {
    path: __dirname + "/src",
    filename: "client.min.js"
  },
  module: {
    loaders: [
      { test: /\.js?$/,
        exclude: /node_modules/,
        query: {
          'presets': ['react']
        },
        loader: "babel-loader" }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
