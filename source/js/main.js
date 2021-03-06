var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navToggleClose = document.querySelector('.main-nav__toggle-close')

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    main-nav.classList.remove('main-nav--opened')
  }
});

navToggleClose.addEventListener('click', function() {
  navMain.classList.remove('main-nav--opened');
})
