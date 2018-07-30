import Swiper from 'swiper'
// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const partnersCardBox = document.querySelectorAll('.partners-card')

if (partnersCardBox[0]) {
  const boxFile = document.createElement('div')
  boxFile.classList.add('swiper-pagination')

  // eslint-disable-next-line fp/no-let
  let careerSlider
  // eslint-disable-next-line no-inner-declarations
  function initSliderPartners() {
    partnersCardBox.forEach((slider) => {
      const partnersCardContainer = slider.querySelector('.container')
      const partnersCardSlide = slider.querySelectorAll('.item')

      slider.classList.add('swiper-container')
      partnersCardContainer.classList.add('swiper-wrapper')
      partnersCardSlide.forEach((slide) => {
        slide.classList.add('swiper-slide')
      })
      slider.append(boxFile.cloneNode(true))
    })

    // eslint-disable-next-line fp/no-mutation
    careerSlider = new Swiper('.partners-card.swiper-container', {
      loop: true,
      spaceBetween: 0,
      speed: 800,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }
  // eslint-disable-next-line no-inner-declarations
  function destroySliderPartners() {
    if (partnersCardBox[0].classList.contains('swiper-container')) {
      careerSlider.destroy(true, true)
    } else {
      return
    }
    partnersCardBox.forEach((slider) => {
      const partnersCardContainer = slider.querySelector('.container')
      const partnersCardSlide = slider.querySelectorAll('.item')

      slider.classList.remove('swiper-container')
      partnersCardContainer.classList.remove('swiper-wrapper')
      slider.querySelector('.swiper-pagination').remove()
      partnersCardSlide.forEach((slide) => {
        slide.classList.remove('swiper-slide')
      })

    })
  }
  // eslint-disable-next-line no-inner-declarations
  function addListenerWidth(mqObj) {
    if (mqObj.matches) {
      initSliderPartners()
    } else {
      destroySliderPartners()
    }
  }
  const mq = window.matchMedia('(max-width: 767px)')
  mq.addListener(addListenerWidth)
  addListenerWidth(mq)
}
