const viewport = document.querySelector('meta[name=viewport]');

function changeViewport() {
  let width = window.innerWidth
  let zoom = width / 1150 * 100
  if (width < 768) {
    viewport.setAttribute('content', 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0')
    document.body.style.zoom='100%'
  } else {
    viewport.setAttribute('content', 'width=1150')
    zoom < 100 ? document.body.style.zoom=zoom+'%' : document.body.style.zoom='100%'
  }
}
window.addEventListener('resize', changeViewport)
document.addEventListener('DOMContentLoaded', changeViewport)
