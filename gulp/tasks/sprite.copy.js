'use strict';

module.exports = function () {
    $.gulp.task('sprite:copy', function () {
        return $.gulp.src('./source/sprite/**/*.*', {since: $.gulp.lastRun('sprite:copy')})
            .pipe($.gulp.dest($.config.root + '/assets/img'));
    });
};
