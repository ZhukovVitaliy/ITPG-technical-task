import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
