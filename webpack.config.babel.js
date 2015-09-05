import webpack from 'webpack';
import path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);

const common = {
  entry: path.resolve(ROOT_PATH, 'app/main.jsx'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [ 'style', 'css' ],
        include: path.resolve(ROOT_PATH, 'app')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kanban app'
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: [ 'react-hot', 'babel' ],
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 4000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
