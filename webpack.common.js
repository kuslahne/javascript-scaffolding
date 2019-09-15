const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    vendor: ['@babel/polyfill', 'navigo', 'lit-html'],
    app: `${src}/app/core/app.js`
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { singleton: true }
          },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ],
        include: [
          /(node_modules|bower_components)/,
          path.resolve(src, 'styles/node_modules.css')
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { singleton: true }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: 'dashes',
              localIdentName: '[path][name]__[local]'
            }
          }
        ],
        exclude: [
          /(node_modules|bower_components)/,
          path.resolve(src, 'styles/node_modules.css')
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|eot|woff|woff2|ttf|svg)$/,
        loader: 'file-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new HtmlWebpackPlugin({
      template: `${src}/app/index.html`,
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.scss', '.css'],
    modules: ['node_modules', 'src']
  }
};
