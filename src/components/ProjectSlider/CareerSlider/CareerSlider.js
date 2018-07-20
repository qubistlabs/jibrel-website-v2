import Swiper from 'swiper'

const CareerSlider = new Swiper('.career-slider .swiper-container', {
  init: false,
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

CareerSlider.init()
