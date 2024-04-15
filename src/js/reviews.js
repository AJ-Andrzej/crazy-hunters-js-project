import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getReviews } from './api';

const list = document.querySelector('.reviews-main-list');
const swiperContainer = document.querySelector('.reviews-swiper');
const nextButtonRev = document.querySelector('.reviews-next-btn');
const prevButtonRev = document.querySelector('.reviews-prev-btn');


function renderReview({ avatar_url, author, review }) {
  return `<li class="reviews-item swiper-slide">
            
              <img class="reviews-avatar" src="${avatar_url}" alt="" width="48" height="48" />
              <h3 class="reviews-item-title">${author}</h3>
              <p class="reviews-item-text">
                ${review}
              </p>
           
          </li>`;
}
function renderReviews(reviewsArr) {
  return reviewsArr.map(renderReview).join('');
}

function renderErrorText() {
  const itemError = document.createElement('li');
  const span = document.createElement('span');
  itemError.classList.add('reviews-item-error');
  span.textContent = 'Not found';
  span.classList.add('reviews-text-error');
  itemError.appendChild(span);
  list.appendChild(itemError);
}

document.addEventListener('DOMContentLoaded', handleReviews);

async function handleReviews() {
  try {
    const review = await getReviews();
    const markup = renderReviews(review);
    list.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error('Error occurred while fetching reviews:', error);
    renderErrorText();
    iziToast.info({
      close: false,
      position: 'topRight',
      message:
        'Sorry, an error occurred while fetching reviews. Please try later!',
    });
  }
}

const swiper = new Swiper(swiperContainer, {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 16,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  direction: 'horizontal',
  navigation: {
    nextEl: '.reviews-next-btn',
    prevEl: '.reviews-prev-btn',
  },
  disabledClass: '.swiper-button-disabled',
});

const nextButtRevonObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        const disabled = nextButtonRev.classList.contains('swiper-button-disabled');
        if (disabled) {
            nextButtonRev.style.opacity = '0.5';
            nextButtonRev.style.cursor = 'not-allowed';
        } else {
            nextButtonRev.style.opacity = '1';
            nextButtonRev.style.cursor = 'pointer';
        }
      }
    });
  });
  
  nextButtRevonObserver.observe(nextButtonRev, { attributes: true });

  
  const prevButtRevonObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        const disabled = prevButtonRev.classList.contains('swiper-button-disabled');
        if (disabled) {
            prevButtonRev.style.opacity = '0.5';
            prevButtonRev.style.cursor = 'not-allowed';
        } else {
            prevButtonRev.style.opacity = '1';
            prevButtonRev.style.cursor = 'pointer';
        }
      }
    });
  });
  
  prevButtRevonObserver.observe(prevButtonRev, { attributes: true });

