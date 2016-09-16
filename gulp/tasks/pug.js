// генерация файлов html из pug шаблонов
'use strict';

module.exports = function() {
  $.gulp.task('pug', function() { 
    return $.gulp.src($.path.template) // путь к шаблонам
      .pipe($.gp.pug({ pretty: true })) // форматируем вывод
      .on('error', $.gp.notify.onError(function(error) {  // оформление ошибки
        console.log(123);
        return {
          title: 'Pug',  
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root)); // путь к итоговой папке
  });
};
