'use strict';

module.exports = function() {
  $.gulp.task('sprite:img', function() {
    var spriteData =
      $.gulp.src('./source/sprite/*.png')
        .pipe($.gp.spritesmith({
          imgName: 'sprite.png',
          cssName: 'sprite.css',
        }));

    var imaStream = spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img'));
    var cssStream = spriteData.css.pipe($.gulp.dest($.config.root + '/assets/css'));

    return $.merge(imaStream, cssStream);
  });
};
