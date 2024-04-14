import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';


const swiperBoxAbout = document.querySelector('.about-swiper');
const nextBtn = document.querySelector('.about-swiper-button-next');



new Swiper(swiperBoxAbout, {
    loop: true,
    modules: [Navigation, Keyboard],
    slidesPerView: 2,
  navigation: {
    nextEl: nextBtn,
    },
    keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  direction: 'horizontal',
  centeredSlides: true,
  watchOverflow: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    1440: {
        slidesPerView: 6,
    },
  },
  disabledClass: 'swiper-button-nest-disabled',
});




    new Accordion('.about-education', { duration: 600,
  collapse: true,
  openOnInit: [0],
  showMultiple: true,
  onOpen: () => {
    aboutArr.classList.add("rotate");
  },
  onClose: () => {
    aboutArr.classList.remove("rotate");
  }
    });

    document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.about-education-list');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const arrow = this.querySelector('.about-arrow');
            const description = this.querySelector('.text-acordion')

            arrow.classList.toggle('rotate');
            description.classList.toggle('visually-hidden');
        });
    });

    new Accordion('.faq-section', {
        duration: 400,
        showFirstItem: false,
    });
});