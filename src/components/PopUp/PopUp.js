// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const popUpOpen = document.querySelectorAll('.js-popup-open')
const popUpClose = document.querySelectorAll('.js-popup-close')
const sectionContent = document.querySelectorAll('.section-content')
const header = document.querySelector('.main-header')
const footer = document.querySelector('.main-footer')
const scrollBarSize = window.innerWidth - document.documentElement.clientWidth
// const styleSize = `${scrollBarSize}px`

function scrollBarSizeFN(popupOpen) {
  if (popupOpen) {
    return `${scrollBarSize}px`
  }
  return 0
}

// eslint-disable-next-line  fp/no-let
let scrolled
function stopScroll() {
  window.scrollTo(0, scrolled)
}
const popUp = {
  openPopup(popUpButton) {
    const popUpID = popUpButton.getAttribute('data-popup-id')
    const popUpContainer = document.querySelector(popUpID)

    // eslint-disable-next-line fp/no-mutation
    scrolled = window.pageYOffset || document.documentElement.scrollTop

    popUpContainer.classList.remove('-hide')
    setTimeout(() => {
      popUpContainer.classList.remove('-animation-hide')
    }, 10)
    this.disableScroll()
  },

  closePopup() {
    this.enableScroll()
    // getParents(popUpButton, '.section-content.-popup').forEach((popUpContainer) => {
    document.querySelectorAll('.section-content.-popup').forEach((popUpContainer) => {
      popUpContainer.classList.add('-animation-hide')
      setTimeout(() => {
        popUpContainer.classList.add('-hide')
      }, 200)
    })
  },

  disableScroll() {
    window.addEventListener('scroll', stopScroll)
    document.body.classList.add('-scroll-lock')
    const scrollBarDisabled = scrollBarSizeFN(true)
    sectionContent.forEach((box) => {
      const el = box
      // eslint-disable-next-line  fp/no-mutation
      el.style.marginRight = scrollBarDisabled
    })
    // eslint-disable-next-line  fp/no-mutation
    header.style.paddingRight = scrollBarDisabled
    // eslint-disable-next-line  fp/no-mutation
    footer.style.paddingRight = scrollBarDisabled
  },

  enableScroll() {
    window.removeEventListener('scroll', stopScroll)
    document.body.classList.remove('-scroll-lock')
    const scrollBarEnabled = scrollBarSizeFN(false)
    sectionContent.forEach((box) => {
      const el = box
      // eslint-disable-next-line  fp/no-mutation
      el.style.marginRight = scrollBarEnabled
    })
    // eslint-disable-next-line  fp/no-mutation
    header.style.paddingRight = scrollBarEnabled
    // eslint-disable-next-line  fp/no-mutation
    footer.style.paddingRight = scrollBarEnabled
  },
}

popUpOpen.forEach((popUpButton) => {
  popUpButton.addEventListener('click', (event) => {
    event.preventDefault()
    popUp.openPopup(popUpButton)
  })
})

popUpClose.forEach((popUpButton) => {
  popUpButton.addEventListener('click', (event) => {
    event.preventDefault()
    popUp.closePopup()
  })
})
