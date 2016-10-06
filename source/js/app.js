(function() {
  'use strict';

    var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');
    var mainlist = document.querySelector('.main-nav__list');

    navMain.classList.remove('main-nav--nojs');

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



