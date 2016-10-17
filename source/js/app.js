$(function() {

  var imgs = [];

  $.each($('*'), function () {
    var
      $this = $(this),
      background = $this.css('background-image');
      img = $this.is('img');

    if (background != 'none') {

      var path = background.replace('url("', '').replace('")', '');
      imgs.push(path);
    }

    if (img) {
      var path = $this.attr('src');

      if (path) {
        imgs.push(path);
      }
    }

  });

  var percentsTotal = 1;

  for (var i = 0; i < imgs.length; i++) {
    var image = $('<img>', {
      attr: {
          src: imgs[i]
      }
    });

    image.on('load', function () {
      setPercents(imgs.length, percentsTotal);
      percentsTotal++;
    });
  }

  function setPercents(total, current) {
    var percent = Math.ceil(current/ total * 100);

    if(percent >= 100) {
      $('.preloader').fadeOut();
    }

    $('.preloader__percents').text(percent + '%');
  }
});

(function() {

'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var mainlist = document.querySelector('.main-nav__list');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
  mainlist.classList.remove('main-nav__list');
  mainlist.classList.add('main-nav__list--opened');

  } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      mainlist.classList.add('main-nav__list');
      mainlist.classList.remove('main-nav__list--opened');
  }
});

})();