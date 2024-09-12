// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  // direction: 'horizontal',
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // loop: true,
  grabCursor: true,
  // slidesPerView: 3,
  // slidesPerView: auto,

  //.swiper-slide {
  // width:auto;
  // }
  // rbeakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   600: {
  //     slidesPerView: auto,
  //   },
  // },
});
