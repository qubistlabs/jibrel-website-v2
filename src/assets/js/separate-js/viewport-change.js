const viewport = document.querySelector("meta[name=viewport]");

const width = (window.innerWidth > 768) ? window.innerWidth : screen.width;
function WidthChange(mq) {
  // if (mq.matches) {
  if (mq < 768) {
    viewport.setAttribute('content', 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0');
  } else {
    viewport.setAttribute('content', 'width=1150');
  }
}WidthChange(width)
