// работа webpack

'use strict';


module.exports = function() {
  $.gulp.task('webpack', function(callback) {
    // запуск webpack
    $.webpack(
        // конфигурационный файл
        $.webpackConf
    , function(err, stats) {
        if(err) throw new $.gp.util.PluginError('webpack', err);
        $.gp.util.log('[webpack]', stats.toString({
            // output options
        }));
     callback();
    });
});
};

