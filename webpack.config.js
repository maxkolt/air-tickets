const HTMLlWebpackPlugin = require('html-webpack-plugin') // видит js файлы которые появляются на html странице
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //хранит стили в отдельном файле

module.exports = {
    entry: {
        main: "./src/main.ts"
    },
    plugins: [ new HTMLlWebpackPlugin({ template: "index.html" }), new MiniCssExtractPlugin({filename: './main.scss'})],
    module: {
        rules: [
            { test: /\.ts?$/,                  use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.css$/,                  use: [ MiniCssExtractPlugin.loader, "css-loader" ] },
            { test: /\.s[ac]ss$/,              use: [ "style-loader", "css-loader", "sass-loader" ], },
            { test: /\.(png|svg|jpg|gif)$/,    use: [ "file-loader" ] },
            { test: /\.(ttf|woff|woff2|eot)$/, use: [ "file-loader" ] },
        ]
    },
    resolve: { extensions: [ '.ts', '.js' ] },
}
