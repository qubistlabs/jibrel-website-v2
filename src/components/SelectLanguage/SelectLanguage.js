// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const languagesBox = document.querySelector('.select-language')
const languageToggle = languagesBox.querySelector('.toggle')
const languageCurrent = languagesBox.querySelector('.current')
const languageSelected = languagesBox.querySelector('.-current')
const languagesHide = languagesBox.querySelector('.hide')
const languages = languagesBox.querySelectorAll('.item')

const languageSite = document.querySelector('html').getAttribute('lang')

const languageChanged = languagesBox.querySelector(`[data-language='${languageSite}']`)

languageSelected.classList.remove('-current')
languageChanged.classList.add('-current')
languageCurrent.innerText = languageChanged.textContent

document.querySelectorAll('a').forEach((link) => {
  const href = link.getAttribute('href')
  if (link.getAttribute('target') !== null
    || href.indexOf('https://') !== -1
    || href.indexOf('http://') !== -1
    || href.indexOf('mailto:') !== -1
  ) {
    // continue
  } else {
    const prefix = languageSite === 'en' ? '/' : `/${languageSite}/`
    const path = href !== '/' ? prefix + href : '/'
    link.setAttribute('href', path)
  }

})

languageToggle.addEventListener('click', () => {
  languagesHide.classList.add('-active')
})

const selectLanguage = {
  init(language) {
    if (language.classList.contains('-current')) {
      this.closeSelect()
      return
    }
    this.selectedLanguage(language)
  },
  selectedLanguage(language) {
    const languageSelect = language.getAttribute('data-language')
    const languagePrefix = languageSelect === 'en' ? '' : `/${languageSelect}/`
    const languageL = languageSelect.length
    const location = window.location.pathname
    const path = languageSite === 'en' ? location.substr(1) : location.substr(languageL + 1)
    document.location.href = languagePrefix + path
  },
  closeSelect() {
    languagesHide.classList.remove('-active')
  },
}

languages.forEach((language) => {
  language.addEventListener('click', () => {
    selectLanguage.init(language)
  })
})

// eslint-disable-next-line no-undef, prefer-arrow-callback, space-before-function-paren, func-names
$(document).on('click', function(e) {
  // eslint-disable-next-line no-undef
  if (!$(e.target).closest(languagesBox).length) {
    selectLanguage.closeSelect()
  }
})
