const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: [ {
          // внедрить CSS на страницу
          loader: 'style-loader'
        }, {
          // переводит CSS в модули CommonJS
          loader: 'css-loader'
        }, {
          // Запуск действий postcss
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` необходим для postcss 8.x;
            // если вы используете postcss 7.x, пропустите ключ
            postcssOptions: {
              // плагины postcss, можно экспортировать в postcss.config.js
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        }, {
          // компилирует Sass в CSS
          loader: 'sass-loader'
        } ]
      }
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  experiments: {
    topLevelAwait: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
  ]
};
