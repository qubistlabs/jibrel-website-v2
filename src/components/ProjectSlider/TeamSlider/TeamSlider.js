import Swiper from 'swiper'

const TeamSlide = document.querySelectorAll('.team-slide')
const TeamSlideLength = TeamSlide.length

const TeamSlider = new Swiper('.team-slider .swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.team-slider .swiper-next',
    prevEl: '.team-slider .swiper-prev',
  },
  spaceBetween: 0,
})

TeamSlider.on('slideChange', () => {
  const index = TeamSlider.realIndex
  const navData = {
    prev: index - 1 < 0 ? TeamSlideLength - 1 : index - 1,
    next: index + 1 > TeamSlideLength - 1 ? 0 : index + 1,
  }
  Object.keys(navData).forEach((key) => {
    const concatStrSlideC = '.swiper-slide.-team-slide[data-swiper-slide-index="' + navData[key] + '"]'
    const concatStrNav = '.swiper-' + key
    const concatStrNavImg = concatStrNav + ' .img'
    const slide = document.querySelector(concatStrSlideC)
    const srcImg = slide.querySelector('.img').getAttribute('src')
    document.querySelector(concatStrNavImg).setAttribute('src', srcImg)
  })
})
