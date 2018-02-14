var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navToggleClose = document.querySelector('.main-nav__toggle-close');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});

navToggleClose.addEventListener('click', function() {
  navMain.classList.remove('main-nav--opened');
});
