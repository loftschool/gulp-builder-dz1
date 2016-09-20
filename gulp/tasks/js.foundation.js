'use strict';

module.exports = function() {
  $.gulp.task('js:foundation', function() {
    return $.gulp.src($.path.jsFoundation)
      .pipe($.gp.concat('foundation.js'))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
