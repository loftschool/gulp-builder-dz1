// задача - очистка итоговой папки проекта с сгенерированнми файлами
'use strict';

module.exports = function() {
  $.gulp.task('clean', function(cb) {
    return $.rimraf($.config.root, cb); // путь к папке
  });
};
