// import Swiper from 'swiper';

// const nextEl = document.querySelector('.swiper-button-next');
// const prevEl = document.querySelector('.swiper-button-prev')

// nextEl.addEventListener("click", handleclickNext);
// prevEl.addEventListener("click", handleclickPrev);

// function handleclickNext(event) {
//     event.preventDefault();



// }
// function handleclickPrev(event) {
//     event.preventDefault();
// }
// const mySwiper = new Swiper('.swiper-container', {
//   direction: 'horizontal', 
//   loop: false, 
//   navigation: {
//     nextEl, 
//     prevEl,
//   },
// });

import Swiper from 'swiper';
const Myswiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        },
        mousewheel: true,
        keyboard: true,
      });

