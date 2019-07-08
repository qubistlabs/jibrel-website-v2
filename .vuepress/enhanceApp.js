import { format } from 'date-fns'

const redirectPath = {
  init() {
    if (window.navigator.languages) {
      return this.processingLanguages(window.navigator.languages)
    }
    if (window.navigator.browserLanguage) {
      return this.switchLanguage(window.navigator.browserLanguage)
    }
    if (window.navigator.language) {
      return this.switchLanguage(window.navigator.language)
    }
    return '/en/'
  },
  processingLanguages(arr) {   
    for (var index = 0; index < arr.length; index++) {      
      switch (arr[index].slice(0, 2)) {
        case 'en': return '/en/'
        case 'ko': return '/ko/'
        default: return '/en/'
      }
    }
  },
  switchLanguage(lang) {
    switch (lang.slice(0, 2)) {
      case 'en': return '/en/'
      case 'ko': return '/ko/'
      default: return '/en/'
    }
  }
}

export default ({
  Vue,
  router,
}) => {
  Vue.filter('formatDate', function (date) {
    return format(date, 'MMM. D, YYYY')
  })
  router.addRoutes([
    { path: '/', redirect: redirectPath.init()},
  ])
}
