'use strict';

module.exports = function() {
	$.gulp.task('sprite:png', function() {

        var spriteData = $.gulp.src('./source/spritie/*.png')
        	.pipe($.gp.spritesmith({
	            imgName: 'sprite.png',
	            cssName: 'sprite.css'
        }));

        var imgStream = spriteData.img
            .pipe($.gulp.dest($.config.root + '/assets/img'));

        var cssStream = spriteData.css
            .pipe($.gulp.dest('./source/style'));

        return $.merge(imgStream, cssStream);
})};