'use strict';

module.exports = function () {
    $.gulp.task('sprite:png', function () {
        var spriteData = $.gulp.src('./source/icons/*.png').pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            algorithm: 'left-right',
            padding: 20
        }));
        var imgStream = spriteData.img.pipe($.gulp.dest('./source/images'));
        var cssStream = spriteData.css.pipe($.gulp.dest('./source/style/common'));
        return $.mergeStream(imgStream, cssStream);
    });
};
