'use strict';

const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


document.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    document.querySelector('.l-header').classList.add('l-header--hasScrolled');
  } else {
    document.querySelector('.l-header').classList.remove('l-header--hasScrolled');
  }
});