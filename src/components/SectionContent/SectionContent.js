// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const supportsOrientationChange = 'onorientationchange' in window
const orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize'
const fullHeighBlocks = document.querySelectorAll('.section-content.-full-screen')

function resizeFullHeight() {
  fullHeighBlocks.forEach((block) => {
    const height = window.innerHeight
    if (height !== 0) {
      const h = `${height}px`
      // eslint-disable-next-line fp/no-mutation, no-param-reassign
      block.style.height = h
    }
  })
}resizeFullHeight()

window.addEventListener(orientationEvent, () => {
  setTimeout(() => {
    resizeFullHeight()
  }, 50)
}, false)
