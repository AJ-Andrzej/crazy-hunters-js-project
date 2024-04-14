import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

new Swiper('.about-swiper', {
  loop: true,
  direction: 'horizontal',
  allowSlideNext: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  spaceBetween: 0,
  speed: 1000,
  navigation: {
    nextEl: '.about-swiper-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
});

new Accordion('.about-education', {
  duration: 600,
  collapse: true,
  openOnInit: [0],
  showMultiple: true,
  onOpen: () => {
    aboutArr.classList.add('rotate');
  },
  onClose: () => {
    aboutArr.classList.remove('rotate');
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.about-education-list');

  accordions.forEach(accordion => {
    accordion.addEventListener('click', function () {
      const arrow = this.querySelector('.about-arrow');
      const description = this.querySelector('.text-acordion');

      arrow.classList.toggle('rotate');
      description.classList.toggle('visually-hidden');
    });
  });

  new Accordion('.faq-section', {
    duration: 400,
    showFirstItem: false,
  });
});
