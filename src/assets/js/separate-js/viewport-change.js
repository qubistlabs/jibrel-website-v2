const viewport = document.querySelector("meta[name=viewport]");

// function addListenerWidth(mqObj) {
//   width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//   console.log(mqObj.matches);
//   if (mqObj.matches) {
//
//   } else {
//
//   }
// }
// const mq = window.matchMedia('(min-width: 1150px)')
// mq.addListener(addListenerWidth)
// addListenerWidth(mq)

const width = (window.innerWidth > 768) ? window.innerWidth : screen.width;
console.log(width);
function WidthChange(mq) {
  // if (mq.matches) {
  if (mq < 768) {
    viewport.setAttribute('content', 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0');
  } else {
    viewport.setAttribute('content', 'width=1150');
  }
}WidthChange(width)

// if (matchMedia) {
//   const mq = window.matchMedia("(min-width: 1150px)");
//   mq.addListener(WidthChange);
//   WidthChange(mq);
// }
