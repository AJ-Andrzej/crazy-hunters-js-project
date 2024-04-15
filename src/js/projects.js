// swiperProjects.on('slideChange', function () {
//   nextButton.disabled = swiperProjects.isEnd ? true : false;
//   prevButton.disabled = swiperProjects.isBeginning ? true : false;
// });
// ============================================================== Ментор.
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
Swiper.use([Navigation, Keyboard]);

const swiperBox = document.querySelector('.swiper-project');
export const nextButton = document.querySelector('.projects-next-btn');
export const prevButton = document.querySelector('.projects-prev-btn');

prevButton.addEventListener('click', function () {
  swiperProjects.slidePrev();
});

nextButton.addEventListener('click', function () {
  swiperProjects.slideNext();
});


const swiperProjects = new Swiper(swiperBox, {
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});


const nextButtonObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        const disabled = nextButton.classList.contains('button-disabled');
        if (disabled) {
            nextButton.style.opacity = '0.5';
            nextButton.style.cursor = 'not-allowed';
        } else {
            nextButton.style.opacity = '1';
            nextButton.style.cursor = 'pointer';
        }
      }
    });
  });
  
  nextButtonObserver.observe(nextButton, { attributes: true });

  
  const prevButtonObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        const disabled = prevButton.classList.contains('button-disabled');
        if (disabled) {
            prevButton.style.opacity = '0.5';
            prevButton.style.cursor = 'not-allowed';
        } else {
            prevButton.style.opacity = '1';
            prevButton.style.cursor = 'pointer';
        }
      }
    });
  });
  
  prevButtonObserver.observe(prevButton, { attributes: true });


