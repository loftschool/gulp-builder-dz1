'use strict';

module.exports = function() {
  $.gulp.task('copy:font', function() {
    return $.gulp.src('./source/fonts/*.*', { since: $.gulp.lastRun('copy:font') })
      .pipe($.gulp.dest('fonts'));
  });
};