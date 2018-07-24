import Swiper from 'swiper'

const teamSlide = document.querySelectorAll('.team-slide')
const teamSlideLength = teamSlide.length

const teamSlider = new Swiper('.team-slider .swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.team-slider .swiper-next',
    prevEl: '.team-slider .swiper-prev',
  },
  spaceBetween: 0,
})

teamSlider.on('slideChange', () => {
  const index = teamSlider.realIndex
  const navData = {
    prev: index - 1 < 0 ? teamSlideLength - 1 : index - 1,
    next: index + 1 > teamSlideLength - 1 ? 0 : index + 1,
  }
  Object.keys(navData).forEach((key) => {
    const concatStrSlide = `.swiper-slide.-team-slide[data-swiper-slide-index="${navData[key]}"]`
    const concatStrNav = `.swiper- ${key}`
    const concatStrNavImg = `${concatStrNav} .img`
    const slide = document.querySelector(concatStrSlide)
    const srcImg = slide.querySelector('.img').getAttribute('src')
    document.querySelector(concatStrNavImg).setAttribute('src', srcImg)
  })
})
