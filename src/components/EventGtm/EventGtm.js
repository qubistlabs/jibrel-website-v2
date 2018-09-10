// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const mainMenu = document.querySelector('.main-menu')


function menuDataSend(category, action, label) {
  // eslint-disable-next-line fp/no-mutating-methods
  window.dataLayer.push({
    'event': 'AutoEvent',
    'eventCategory': category,
    'eventAction': action,
    'eventLabel': label,
    'eventValue': '',
  })
  return true
}

if (mainMenu) {
  const host = window.location.hostname
  const path = window.location.pathname
  const title = document.querySelector('title').textContent
  const mainMenuLinks = mainMenu.querySelectorAll('.link')
  const menuOpen = document.querySelector('.main-header').querySelector('.js-popup-open')
  const menuClose = mainMenu.querySelector('.js-popup-close')

  // eslint-disable-next-line fp/no-mutating-methods
  window.dataLayer.push({
    'event': 'virtualPageview',
    'virtualTitle': title,
    'virtualUrl': path,
    'virtualHost': host,
  })

  menuOpen.addEventListener('click', () => {
    menuDataSend('Menu', 'Open_menu', '')
  })
  menuClose.addEventListener('click', () => {
    menuDataSend('Menu', 'Close_menu', '')
  })

  mainMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const label = link.textContent
      menuDataSend('Menu', 'GoTo', label)
    })
  })
}
