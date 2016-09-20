'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
