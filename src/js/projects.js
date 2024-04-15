
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
Swiper.use([Navigation, Keyboard]);


export const nextButton = document.querySelector('.projects-next-btn');
export const prevButton = document.querySelector('.projects-prev-btn');

const swiperProjects = new Swiper('.swiper-project', {
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

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


// function updateButtonState() {
//   if (swiperProjects.isEnd) {
//     nextButton.classList.add('disabled-button');
//   } else {
//     nextButton.classList.remove('disabled-button');
//   }

//   if (swiperProjects.isBeginning) {
//     prevButton.classList.add('disabled-button');
//   } else {
//     prevButton.classList.remove('disabled-button');
//   }
// }

// updateButtonState();

 



// const nextButtonObserver = new MutationObserver(mutations => {
//   mutations.forEach(mutation => {
//     if (mutation.attributeName === 'class') {
//       const disabled = nextButton.classList.contains('button-disabled');
//       if (disabled) {
//           nextButton.style.opacity = '0.5';
//           nextButton.style.cursor = 'not-allowed';
//       } else {
//           nextButton.style.opacity = '1';
//           nextButton.style.cursor = 'pointer';
//       }
//     }
//   });
// });

// const prevButtonObserver = new MutationObserver(mutations => {
//   mutations.forEach(mutation => {
//     if (mutation.attributeName === 'class') {
//       const disabled = prevButton.classList.contains('button-disabled');
//       if (disabled) {
//           prevButton.style.opacity = '0.5';
//           prevButton.style.cursor = 'not-allowed';
//       } else {
//           prevButton.style.opacity = '1';
//           prevButton.style.cursor = 'pointer';
//       }
//     }
//   });
// });

// nextButtonObserver.observe(nextButton, { attributes: true });
// prevButtonObserver.observe(prevButton, { attributes: true });
