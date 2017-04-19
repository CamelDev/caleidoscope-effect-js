/*
module.exports = {
    entry: {
         paper: "./node_modules/paper/dist/paper-full.min.js",
         caleidoscope: "./js/caleidoscope.js",
         caleidoscopehelper: "./js/caleidoscope-helper.js",
         demo: "./js/demo.js"
        },
    output: {
        path: "./dist/js",
        filename: "[name]-bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
*/

var path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  entry: './js/demo.js',
  output: {
    filename: 'demo-bundle.js',
    path: path.join(__dirname, "dist/js"),
    publicPath: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
            'es2015' 
          ] 
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Tree-shaking' })
  ]
}