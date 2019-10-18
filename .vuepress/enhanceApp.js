import Promise from 'bluebird'
import { format } from 'date-fns'

window.Promise = Promise

export default ({
  Vue,
}) => {
  Vue.filter('formatDate', function (date) {
    return format(date, 'MMM. D, YYYY')
  })
}
