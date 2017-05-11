'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/style/**/*.{sass,scss}', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image'));
    // blocks
    $.gulp.watch('./source/blocks/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/blocks/**/*.{sass,scss}', $.gulp.series('sass'));
    $.gulp.watch('./source/blocks/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/blocks/**/*.*', $.gulp.series('copy:image'));
  });
};
