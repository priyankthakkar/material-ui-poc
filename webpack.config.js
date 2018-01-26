const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['./src/js/index.jsx'],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/public/dist/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/templates/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, '/src/js')],
        loader: ['babel-loader']
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
	  },
	  {
		test: /.\css$/,
		use: ['css-loader', 'style-loader']
	  }
    ]
  }
};

module.exports = config;
