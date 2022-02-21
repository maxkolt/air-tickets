const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // вход
    entry: './src/ts/app.ts',
    // инструмент разработчика
    devtool: 'inline-source-map',
    // чтобы вебпак начал свою работу, нужно указать главный (основной) файл, который будет включать в себя все другие необходимые файлы (модули).
    // эксперементы
    experiments: {
        // асинхронная веб сборка
        asyncWebAssembly: true,
        // синхронизировать веб сборку
        syncWebAssembly: true,
        // верхний уровень
        topLevelAwait: true,
    },
    // сервер разработки
    // devServer: {
    // TODO
    // },
    // модуль
    module: {
        // Для того, чтобы трансформировать файл, используются специальные утилиты - загрузчики (loaders).
        //Для любых настроек модуля вебпак используется поле module.
        //Массив rules  внутри объекта module определяет список правил для загрузчиков.
        // правила
        rules: [
            {   // тест
                test: /\.ts?$/,
                // использовать
                use: 'ts-loader',
                // исключать
                exclude: /node_modules/,
            },
            {   // тест
                test: /\.(scss)$/,
                // использовать
                use: [{
                    // внедрить CSS на страницу
                    // внедрить
                        loader: 'style-loader'
                }, {
                    // переводит CSS в модули CommonJS
                    // внедрить
                        loader: 'css-loader'
                }, {
                    // Запуск действий postcss
                    // внедрить
                        loader: 'postcss-loader',
                    // опции
                        options: {
                        // `postcssOptions` необходим для postcss 8.x;
                        // если вы используете postcss 7.x, пропустите ключ
                        // опубликовать css опции
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
                    // внедрить
                    loader: 'sass-loader'
                    } ]
            },
            {   // тест
                test: /\.(png|jpe?g|gif)$/,
                // использовать
                use: [
                    {   // внедрить
                        loader: 'file-loader',
                        // опции
                        options: {
                            // имя
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    // решать
    resolve: {
        // расширения
        extensions: [ '*', '.js', '.ts' ],
    },
    // Вебпак плагины используются для настройки процесса сборки.
    //Например, плагин для минификации кода (во время сборки код подвергается очистке и минификации).
    //Или плагин для сборки html страницы и css кода (скрипты вставляются в html, куски css собираются в один файл).
    // плагины
    plugins: [
        new HtmlWebpackPlugin({
            // шаблон
            template: 'index.html',
        }),
    ],
    // Кроме entry, мы можем указать поле, куда (в какой файл) собирать конечный результат. Это свойство задаётся с помощью поля output.
    //По умолчанию, весь результирующий код собирается в папку dist.
    // опции
    output: {
        // путь
        path: path.resolve(__dirname, 'dist'),
        // имя файла
        filename: '[name].[hash].js',
    },
    // режим
    mode: 'development',
};
