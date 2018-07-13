const tabButton = document.querySelectorAll('.tabs-buttons .item')

function tabEvent(event) {
  const tabContainer = this.closest('.tabs-component')
  const scopeTabButton = tabContainer.querySelectorAll('.tabs-buttons .item')
  const scopeTabContent = tabContainer.querySelectorAll('.tabs-content .tab')
  const index = Array.prototype.indexOf.call(tabButton, event.target)

  scopeTabButton.forEach((element) => {
    element.classList.remove('-active')
  })

  scopeTabContent.forEach((element) => {
    element.classList.remove('-active')
  })

  this.classList.add('-active')
  scopeTabContent[index].classList.add('-active')
}

tabButton.forEach((element) => {
  element.addEventListener('click', tabEvent, { passive: false })
})
