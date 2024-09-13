const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      initialSlide: 1,
      centeredSlides: true,
      slidesPerView: 'auto',

      slidesPerView: 2,
      spaceBetween: 25,

      slidesOffsetBefore: -120,
    },
  },
});
