import { format } from 'date-fns'

export default ({
  Vue,
}) => {
  Vue.filter('formatDate', function (date) {
    return format(date, 'MMM. D, YYYY')
  })
}
