const arrowUp = document.querySelectorAll('.arrow.-up')
const arrowDown = document.querySelectorAll('.arrow.-down')

function scrollIt(obj) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': obj,
  })
}

arrowUp.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    scrollIt(document.body.offsetTop)
  })
})

arrowDown.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    scrollIt(window.innerHeight)
  })
})
