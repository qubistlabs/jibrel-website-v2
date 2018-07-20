const popUpOpen = document.querySelectorAll('.js-popup-open')
const popUpClose = document.querySelectorAll('.js-popup-close')

function getParents(element, selector) {
  const elements = [];
  let elem = element;
  const isWithSelector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType === Node.ELEMENT_NODE) {
      if (!isWithSelector || elem.matches(selector)) {
        elements.push(elem);
      }
    }
  }

  return elements;
}

function preventDefault(e) {
  e.preventDefault()
}

const popUp = {
  openPopup(popUpButton) {
    const popUpID = popUpButton.getAttribute('data-popup-id')
    const popUpContainer = document.querySelector(popUpID)

    popUpContainer.classList.remove('-hide')
    setTimeout(() => {
      popUpContainer.classList.remove('-animation-hide')
    }, 10)
    this.disableScroll()
  },

  closePopup(popUpButton) {

    this.enableScroll()
    getParents(popUpButton, '.section-content.-popup').forEach((popUpContainer) => {
      popUpContainer.classList.add('-animation-hide')
      setTimeout(() => {
        popUpContainer.classList.add('-hide')
      }, 200)
    })

  },

  disableScroll() {
    if (window.innerWidth < 767) {
      document.body.addEventListener('touchmove', preventDefault, { passive: false })
    } else {
      document.body.classList.add('-scroll-lock')
    }
  },

  enableScroll() {
    document.body.removeEventListener('touchmove', preventDefault, { passive: false })
    document.body.classList.remove('-scroll-lock')
  },
}

function popUpOpenFN(popUpButton) {
  popUpButton.addEventListener('click', (event) => {
    event.preventDefault()
    popUp.openPopup(popUpButton)
  })
}

function popUpCloseFN(popUpButton) {
  popUpButton.addEventListener('click', (event) => {
    event.preventDefault()
    popUp.closePopup(popUpButton)
  })
}

popUpOpen.forEach((popUpButton) => {
  popUpOpenFN(popUpButton)
})

popUpClose.forEach((popUpButton) => {
  popUpCloseFN(popUpButton)
})
