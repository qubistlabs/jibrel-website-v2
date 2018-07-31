import Swiper from 'swiper'

// eslint-disable-next-line no-unused-vars
const careerSlider = new Swiper('.partners-card.swiper-container', {
  loop: true,
  spaceBetween: 0,
  autoplay: true,
  speed: 800,
  slidesPerView: 4,
  767: {
    slidesPerView: 1,
  },
})
