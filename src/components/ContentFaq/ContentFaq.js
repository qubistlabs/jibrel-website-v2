// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const actionObj = document.querySelectorAll('.js-toggle-next-box')

function slideBoxFN() {

  const slideBox = this.nextElementSibling
  const height = slideBox.querySelector('.js-get-height').clientHeight
  const px = 'px'
  const heightString = height + px

  this.nextElementSibling.style.height = heightString

  if (this.classList.contains('-active')) {
    this.classList.remove('-active')
    setTimeout(() => {
      this.nextElementSibling.style.height = 0
    }, 10)
    return
  }

  this.classList.add('-active')
  setTimeout(() => {
    this.nextElementSibling.style.height = 'auto'
  }, 400)

}

actionObj.forEach((element) => {
  element.addEventListener('click', slideBoxFN, { passive: false })
})
