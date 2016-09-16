// генерация файлов стилей из мсходный scss файлов

'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./source/style/app.scss') // точка входа - основной файл стилей
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' })) // оформление ошибки
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig })) // автопрефиксер
      .pipe($.gp.sourcemaps.write()) // поддержка source map
      .pipe($.gulp.dest($.config.root + '/assets/css')) // путь к итоговой папке
      .pipe($.browserSync.stream()); // автоматическая перезагрузка браузера при изменении стилей
  })
};
