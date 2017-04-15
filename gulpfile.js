'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  merge: require('merge-stream'),
  path: {
    tasks: require('./gulp/paths/tasks.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  webpack: {
    self: require('webpack'),
    gulpWebpack: require('gulp-webpack'),
    config: require('./webpack.config')
  }
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'copy:image',
    'css:foundation',
    'sprite:svg',
    'sprite:img',
    'fonts'
  ),
  $.gulp.parallel(
    'watch',
    'serve',
    'webpack'
  )
));
