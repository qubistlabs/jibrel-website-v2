import { format } from 'date-fns'

export default ({
  Vue,
  options,
  siteData,
}) => {
  Vue.filter('formatDate', function (date) {
    return format(date, 'MMM. D, YYYY')
  })
  Vue.filter('getLocale', function (str) {
    return siteData.locales[options.router.app.$localeConfig.path].data[str]    
  })
}
