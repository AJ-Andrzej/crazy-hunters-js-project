import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

// const swiper = new Swiper(...);

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const swiper = new Swiper('.about-swiper', {
  loop: true,
  loopSlides: 6,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.about__swiper-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
// const swiper = new Swiper('.about-swiper', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   loop: true,

//   loopAdditionalSlides: 3,

//   breakpoints: {
//     375: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1440: {
//       slidesPerView: 6,
//     },
//   },
// });
