'use strict';

module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src('./source/images/**/*.*', { since: $.gulp.lastRun('copy:image') })
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
