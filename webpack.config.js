// dependencies
const path = require("path");
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
      //  -----  JavaScript  -----
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
              [ 'es2015', { modules: false } ] // ["amd", "umd", "systemjs", "commonjs"]".
          ] 
        }
      },
      // -----  CSS  ----
      {
        test: /\.css$/,
        exclude: /node_modules/,
        //  loader: "style!css"
        // executed in reverse order
        use: ['style-loader', 
              'css-loader'
             ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Tree-shaking' })
  ]
};