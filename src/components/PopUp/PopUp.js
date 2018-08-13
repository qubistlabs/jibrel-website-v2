// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const popUpOpen = document.querySelectorAll('.js-popup-open')
const popUpClose = document.querySelectorAll('.js-popup-close')

// function preventDefault(e) {
//   e.preventDefault()
// }

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
    // document.body.addEventListener('touchmove', preventDefault, { passive: false })
    window.addEventListener('scroll', stopScroll)
  },

  enableScroll() {
    // document.body.removeEventListener('touchmove', preventDefault, { passive: false })
    window.removeEventListener('scroll', stopScroll)
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
