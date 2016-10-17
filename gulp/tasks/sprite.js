'use strict';

module.exports = function() {
  $.gulp.task('sprite', function () {
  	var spriteData = $.gulp.src('./source/images/icons/*.png')
  		.pipe($.gp.spritesmith({
    		imgName: 'sprite.png',
    		imgPath: '../img/sprite.png',
    		cssName: 'sprite.scss'
  		}));
  spriteData.img.pipe($.gulp.dest('./source/images'));
  spriteData.css.pipe($.gulp.dest('./style/common'));
})};
