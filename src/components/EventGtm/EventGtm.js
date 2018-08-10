const host = window.location.hostname
const path = window.location.pathname
const title = document.querySelector('title').textContent

const mainMenuLinks = document.querySelector('.main-menu').querySelectorAll('.link')

// eslint-disable-next-line fp/no-mutating-methods
window.dataLayer.push({
  'event': 'virtualPageview',
  'virtualTitle': title,
  'virtualUrl': path,
  'virtualHost': host,
})

function menuDataSend(label) {
  // eslint-disable-next-line fp/no-mutating-methods
  window.dataLayer.push({
    'event': 'AutoEvent',
    'eventCategory': 'Menu',
    'eventAction': 'GoTo',
    'eventLabel': label,
    'eventValue': '',
  })
}

mainMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const label = link.textContent
    menuDataSend(label)
  })
})
