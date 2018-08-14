import Swiper from 'swiper'

// eslint-disable-next-line no-unused-vars
const careerSlider = new Swiper('.career-slider .swiper-container', {
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  loopFillGroupWithBlank: true,
  loopedSlides: 10,
  speed: 800,
  pagination: {
    el: '.career-slider .swiper-pagination',
    clickable: true,
  },
})
