'use strict';

module.exports = function() {
    $.gulp.task('sprite:image', function() {
        var spriteData = $.gulp.src('./source/sprites/*.{png,gif}')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss'
            }));

        var imgStream = spriteData.img
            .pipe($.gulp.dest($.config.root + '/assets/img'));

        var cssStream = spriteData.css
            .pipe($.gp.replace('#{$sprite-image}','/assets/img/#{$sprite-image}'))
            .pipe($.gulp.dest('./source/style/common'));

        return $.merge(imgStream, cssStream);
    });
};