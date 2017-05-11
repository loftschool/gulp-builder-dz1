'use strict';

module.exports = function() {
  $.gulp.task('copy:image-block', function() {
    return $.gulp.src('./source/blocks/**/*.{jpg,png,svg}', { since: $.gulp.lastRun('copy:image-block') })
      .pipe($.gulp.dest($.config.root + '/assets/img')); // + /block-name/*
  });
};
