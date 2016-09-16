// контакенация и минификация вендорных файлов стилей и копирование сгенерированного общего файла в итоговую папку
// перечень вендорных файлов берем из './gulp/path/css.foundation.js'
'use strict';

module.exports = function() {
  $.gulp.task('css.foundation', function() {
    return $.gulp.src($.path.cssFoundation)
      .pipe($.gp.concatCss('foundation.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
  })
};


