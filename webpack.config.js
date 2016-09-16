// конфигурационный файл webpack

var webpack = require("webpack"); // подключаем npm пакет

module.exports = {
     entry: './source/js/app.js', // путь к основным файлам js скриптов (точки входа)
     output: {
         path: './build/assets/js', // путь к итоговой папке скриптов
         filename: 'bundle.js', // имя итогового файла
         sourceMapFilename: 'bundle.map' //  файл sourcemap
     },
     module: {  // подключение дополнительных модулей
        loaders: [   // подключение babel для поддержки es6
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
     devtool: 'source-map', // работа  c source map
     plugins: [
        new webpack.optimize.UglifyJsPlugin({ // минифицируем и оптимизируем конечный файл
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
 };
