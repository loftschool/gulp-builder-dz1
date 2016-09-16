// контакенация и минификация вендорных файлов скриптов и копирование сгенерированного общего файла в итоговую папку
// перечень вендорных файлов берем из './gulp/path/js.foundation.js'

'use strict';

module.exports = function() {
  $.gulp.task('js.foundation', function() {
    return $.gulp.src($.path.jsFoundation)
      .pipe($.gp.concat('foundation.js'))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};

