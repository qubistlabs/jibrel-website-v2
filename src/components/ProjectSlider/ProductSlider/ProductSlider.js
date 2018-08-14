import Swiper from 'swiper'
// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../../assets/js/plugins/polyfillForEach'

const productSliderBox = document.querySelectorAll('.product-slider')
const productSliderPagination = document.querySelectorAll('.products-pagination')

if (productSliderBox[0]) {
  // const paginationBox = document.createElement('div')
  // paginationBox.classList.add('products-pagination','container', '_container-fix')

  productSliderBox.forEach((box, i) => {
    const productSlider = box.querySelector('.container.swiper-container')

    // eslint-disable-next-line no-unused-vars
    const careerSlider = new Swiper(productSlider, {
      loop: true,
      spaceBetween: 0,
      speed: 800,
      pagination: {
        el: productSliderPagination[i],
        clickable: true,
        renderBullet(index, className) {
          const srcText = box.querySelectorAll('.slide')[index].getAttribute('data-title')
          return `<button class='button ${className}'>${srcText}</button>`
        },
      },
    })
  })
}
