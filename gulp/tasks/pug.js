'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.data(function (file) {
          return require('../../source/template/common/data.json');
      }))
      .pipe($.gp.pug({
          pretty: true
      }))
      .on('error', $.gp.notify.onError(function (error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
