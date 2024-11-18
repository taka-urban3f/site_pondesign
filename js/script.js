'use strict';

// スワイパー設定。
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

// 少しでもスクロールするとヘッダーの高さを小さくする。
document.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    document.querySelector('.l-header').classList.add('l-header--hasScrolled');
  } else {
    document.querySelector('.l-header').classList.remove('l-header--hasScrolled');
  }
});

// ------------------------------------------------------------------
// ハンバーガーボタンやメニュークリック時のイベントハンドラ。
// ------------------------------------------------------------------

// ハンバーガーボタンクリックによるメニュー表示。
document.querySelector('.l-header__humBtn').addEventListener('click', function () {
  this.classList.toggle('l-header__humBtn--isOn'); //子要素の３本線をCSSアニメーション。
  document.querySelector('.l-header__gnav').classList.toggle('l-header__gnav--show');
});

// いずれかのメニュー項目をクリックしたら、メニューを非表示にする。
const elems_gnavItem = document.querySelectorAll('.l-header__gnav__item');
if (elems_gnavItem.length > 0) {
  elems_gnavItem.forEach(function (e) {
    e.addEventListener('click', function () {
      document.querySelector('.l-header__gnav').classList.remove('l-header__gnav--show');
    });
  });
}