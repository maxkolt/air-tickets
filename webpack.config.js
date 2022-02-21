const path = require('path');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/ts/app.ts',
    experiments: {topLevelAwait: true},
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader', options: {importLoaders: 1, sourceMap: true},},
                    {loader: 'postcss-loader', options: {plugins: () => [precss, autoprefixer],},},
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.ts'],
    },
    plugins: [
        new MiniCssExtractPlugin({filename: './main.css'}),
        new HtmlWebpackPlugin({template: 'index.html'}),
    ],
    output: {
        //path: path.resolve(__dirname, 'dist'),
        //  filename: '[name].[hash].js',
    },
    mode: 'development',
};
