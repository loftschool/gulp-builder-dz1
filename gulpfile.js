'use strict'; // cтрогий режим

//  создаем глобальный обьект с установочными данными
global.$ = {
  package: require('./package.json'), // файл настроек для работы с npm
  config: require('./gulp/config'),  // конфигурационный фал проекта
  webpackConf: require('./webpack.config.js'),// конфигурационный фал webpack
  // пути к блокам сборки
  path: {  
    task: require('./gulp/paths/tasks.js'), //  путь к перечню выполняемых тасков
    template: require('./gulp/paths/template.js'), // пути к основным файлам шаблонов (точки входа)
    jsFoundation: require('./gulp/paths/js.foundation.js'), // пути к вендорным  js библиоткам
    cssFoundation: require('./gulp/paths/css.foundation.js') // пути к вендорным  сss библиоткам
  },
  //подключение необходимых npm пакетов 
  gulp: require('gulp'), 
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  webpack: require('webpack'),
  spritesmith: require('gulp.spritesmith'),
  merge:require('merge-stream'),
  // подключение пакетов название кторых начинаеться с ключевого слова gulp , например gulp-pug.
  // данный пакет позволяет их вызвывать одной, более короткой командой - в данном случае $.gp.pug
  gp: require('gulp-load-plugins')()
};


// подключение всех задач в списке './gulp/paths/tasks.js'
$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

// задача по умолчанию. Запускаеться при выполнении команды gulp  в командной строке
$.gulp.task('default', $.gulp.series( // series последовательное выполнение
  'clean', // запуск конкретного таска
  $.gulp.parallel(  // parallel параллельное выполенение
    'sass',
    'pug',
    'js.foundation',
    'webpack',
    'css.foundation'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));

// Пример отдельной задачи, генерация спрайтов  - запускем в командной строке <gulp sprites>
  
