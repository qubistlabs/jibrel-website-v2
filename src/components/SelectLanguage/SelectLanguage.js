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
  if (link.getAttribute('target') === null) {
    const href = link.getAttribute('href')
    const prefix = languageSite === 'en' ? '/' : `/${languageSite}/`

    link.setAttribute('href', prefix+href)
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
    const languagePuth = languageSelect === 'en' ? '/' : `/${languageSelect}/`
    const languageL = languageSelect.length
    const path = languageSite === 'en' ? window.location.pathname.substr(1) : window.location.pathname.substr(languageL+1)
    const prefix = languageSelect === 'en' ? '' : `/${languageSelect}/`
    document.location.href = prefix+path
    console.log(prefix+path);
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
