"use strict";

var searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = function () {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
};

var shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = function () {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
};

var loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = function () {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
};

var navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = function () {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
};

window.onscroll = function () {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1020: {
      slidesPerView: 3
    }
  }
});
var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1020: {
      slidesPerView: 3
    }
  }
});
//# sourceMappingURL=script.dev.js.map
