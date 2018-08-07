// eslint-disable-next-line no-unused-vars
import polyfillForEach from '../../assets/js/plugins/polyfillForEach'

const languagesBox = document.querySelector('.select-language')
const languageToggle = languagesBox.querySelector('.toggle')
const languageCurrent = languagesBox.querySelector('.current')
const languageSelected = languagesBox.querySelector('.-current')
const languagesHide = languagesBox.querySelector('.hide')
const languages = languagesBox.querySelectorAll('.item')

const languageLength = languageSelected.getAttribute('data-language').length
const languageUrl = window.location.pathname.slice(1, languageLength+1)
const languageChanged = languagesBox.querySelector(`[data-language='${languageUrl}']`)

languageSelected.classList.remove('-current')
languageChanged.classList.add('-current')
console.log(languageChanged.textContent)
languageCurrent.innerText = languageChanged.textContent


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
    const languageL = languageSelect.length
    const path = window.location.pathname.substr(languageL+1)
    document.location.href = `/${languageSelect}${path}`
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
