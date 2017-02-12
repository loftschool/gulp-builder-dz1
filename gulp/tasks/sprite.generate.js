'use strict';

module.exports = function () {
    $.gulp.task('sprite:generate', function () {
        return $.gulp.src('./source/images/*.{png,gif}')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            }))
            .pipe($.gulp.dest('./source/sprite'))
    })
};
