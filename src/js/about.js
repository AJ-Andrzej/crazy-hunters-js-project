import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

const aboutMeSwiperBox = document.querySelector('.about-swipper');
const aboutMeNextButton = document.querySelector('.about-swiper-next-button');

const swiper = new Swiper(aboutMeSwiperBox, {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: aboutMeNextButton,
  },
  loop: true,
  direction: 'horizontal',
  watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 0,
  breakpoints: {
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
