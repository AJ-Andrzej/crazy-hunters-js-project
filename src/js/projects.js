
// import Swiper from 'swiper';
// import { Navigation, Keyboard } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const swiperBox = document.querySelector('.swiper-wrapper');
// export const nextBtn = document.querySelector('.swiper-button-next');
// export const prevBtn = document.querySelector('.swiper-button-prev');



// const swiperProjects = new Swiper(swiperBox, {
//   modules: [Navigation, Keyboard],
//   navigation: {
//     nextEl: nextBtn,
//     prevEl: prevBtn,
//   },
//   direction: 'horizontal',
//   centeredSlides: true,
//   watchOverflow: true,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },
//   slidesPerView: 1,
// });


// const nextBtnObserver = new MutationObserver(mutations => {
//     mutations.forEach(mutation => {
//       if (mutation.attributeName === 'class') {
//         const disabled = nextBtn.classList.contains('swiper-button-disabled');
//         if (disabled) {
//             nextBtn.style.opacity = '0.5';
//             nextBtn.style.cursor = 'not-allowed';
//         } else {
//             nextBtn.style.opacity = '1';
//             nextBtn.style.cursor = 'pointer';
//         }
//       }
//     });
//   });
  
//   nextBtnObserver.observe(nextBtn, { attributes: true });

  
//   const prevBtnObserver = new MutationObserver(mutations => {
//     mutations.forEach(mutation => {
//       if (mutation.attributeName === 'class') {
//         const disabled = prevBtn.classList.contains('swiper-button-disabled');
//         if (disabled) {
//             prevBtn.style.opacity = '0.5';
//             prevBtn.style.cursor = 'not-allowed';
//         } else {
//             prevBtn.style.opacity = '1';
//             prevBtn.style.cursor = 'pointer';
//         }
//       }
//     });
//   });
  
// prevBtnObserver.observe(prevBtn, { attributes: true });
  





// ========================================

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';


export const nextButton = document.querySelector('.projects-next-btn');
export const prevButton = document.querySelector('.projects-prev-btn');

const swiperProjects = new Swiper('.swiper-project', {
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

prevButton.disabled = true;

prevButton.addEventListener('click', function () {
  swiperProjects.slidePrev();
});

nextButton.addEventListener('click', function () {
  swiperProjects.slideNext();
});

swiperProjects.on('slideChange', function () {
  nextButton.disabled = swiperProjects.isEnd ? true : false;
  prevButton.disabled = swiperProjects.isBeginning ? true : false;
});


// const swiperBox = document.querySelector('.swiper-projects');
// export const nextBtn = document.querySelector('.projects-next-btn');
// export const prevBtn = document.querySelector('.projects-prev-btn')


// const swiperProjects = new Swiper(swiperBox, {
//     modules: [Navigation, Keyboard],
//     slidesPerView: 1,
//   spaceBetween: 16,
//   navigation: {
//     nextEl: nextBtn,
//     prevEl: prevBtn,
//   },
//   direction: 'horizontal',
//   centeredSlides: true,
//   watchOverflow: false,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },
//   disabledClass: 'swiper-button-disabled',
// });

// const mySwiper = new Swiper('.swiper-container', {
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   mousewheel: true,
//   keyboard: true,
// });


// ========================================================


// document.addEventListener('DOMContentLoaded', function () {
//   const mySwiper = new Swiper('.swiper-container', {

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

 
//   const prevButton = document.querySelector('.swiper-button-prev');
//   const nextButton = document.querySelector('.swiper-button-next');


//     prevButton.addEventListener('click', () => {
//         mySwiper.slidePrev();

//         nextButton.addEventListener('click', () => {
//             mySwiper.slideNext()
//         });
//     })
// });




// const nextEl = document.querySelector('.swiper-button-next');
// const prevEl = document.querySelector('.swiper-button-prev')

// nextEl.addEventListener("click", handleclickNext);
// prevEl.addEventListener("click", handleclickPrev);

// function handleclickNext(event) {
//     event.preventDefault();
// const Myswiper = new Swiper('.mySwiper', {
//         spaceBetween: 30,
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//           el: '.swiper-pagination',
//         },
//         mousewheel: true,
//         keyboard: true,
// });



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

// import Swiper from 'swiper';
// const Myswiper = new Swiper('.mySwiper', {
//         spaceBetween: 30,
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//           el: '.swiper-pagination',
//         },
//         mousewheel: true,
//         keyboard: true,
// });



