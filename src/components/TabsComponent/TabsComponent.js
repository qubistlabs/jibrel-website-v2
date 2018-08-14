// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const tabContainer = document.querySelectorAll('.tabs-component')

function tabEvent(container) {
  // const tabContainer = this.closest('.tabs-component')
  const tabButton = container.querySelectorAll('.js-tab-select')

  tabButton.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      const scopeTabContent = container.querySelectorAll('.tabs-content .tab')
      const index = Array.prototype.indexOf.call(tabButton, event.target)

      tabButton.forEach((e) => {
        e.classList.remove('-active')
      })

      scopeTabContent.forEach((e) => {
        e.classList.remove('-active')
      })

      element.classList.add('-active')
      scopeTabContent[index].classList.add('-active')
    })
  })
}

tabContainer.forEach((container) => {
  tabEvent(container)
})
