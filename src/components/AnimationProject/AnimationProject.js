import AOS from 'aos'


const width = window.innerWidth
function WidthChange(mq) {
  if (mq > 1024) {
    AOS.init()
  }
}WidthChange(width)
