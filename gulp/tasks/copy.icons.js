'use strict';

module.exports = function() {
  $.gulp.task('copy:icons', function() {
    return $.gulp.src('./source/icons/**/*.*', { since: $.gulp.lastRun('copy:icons') })
      .pipe($.gulp.dest($.config.root + '/assets/icons'));
  });
};
