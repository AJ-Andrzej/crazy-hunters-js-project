const coverBlock = document.querySelector('.content');
const images = document.querySelectorAll('.marquee__line');
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.y < 0
}

window.addEventListener('scroll',(e) => {
  if (isElementInViewport(coverBlock)) {
    images.forEach(el => el.classList.add('animate-block'))
  } else {
    images.forEach(el => el.classList.remove('animate-block'))
  }
})
