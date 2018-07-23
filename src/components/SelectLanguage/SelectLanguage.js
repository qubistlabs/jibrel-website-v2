const languagesBox = document.querySelector('.select-language')
const languageToggle = languagesBox.querySelector('.toggle')
const languageCurrent = languagesBox.querySelector('.current')
const languagesHide = languagesBox.querySelector('.hide')
const languages = languagesBox.querySelectorAll('.item')

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
    const languageName = language.innerText

    languages.forEach((item) => {
      item.classList.remove('-current')
    })

    language.classList.add('-current')
    languageCurrent.innerText = languageName
    this.closeSelect()
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
