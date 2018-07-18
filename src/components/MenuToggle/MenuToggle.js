const menuToggle = document.querySelectorAll('.menu-toggle')
const menuPopup = document.querySelector('.section-content.-menu')

function preventDefault(e) {
  e.preventDefault()
}

function disableScroll() {
  if (window.innerWidth < 767) {
    document.body.addEventListener('touchmove', preventDefault, { passive: false })
  } else {
    document.body.classList.add('-scroll-lock')
  }
}

function enableScroll() {
  document.body.removeEventListener('touchmove', preventDefault, { passive: false })
  document.body.classList.remove('-scroll-lock')
}

function menuToggleFN() {
  if (menuPopup.classList.contains('-hide')) {
    menuPopup.classList.remove('-hide')
    setTimeout(() => {
      menuPopup.classList.remove('-animation-hide')
    }, 10)
    disableScroll()
    return
  }
  enableScroll()
  menuPopup.classList.add('-animation-hide')
  setTimeout(() => {
    menuPopup.classList.add('-hide')
  }, 200)
}

menuToggle.forEach((element) => {
  element.addEventListener('click', menuToggleFN, { passive: false })
})
