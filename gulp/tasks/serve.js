'use strict';
// работа с browsersync


module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({ // инициализации
      open: false, // при запуске не открывать новую вкладку браузера
      server: $.config.root // путь к папке для отображения
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload); // при изменении файлов кроме файлов стилей, перегружать браузер

  });
};
