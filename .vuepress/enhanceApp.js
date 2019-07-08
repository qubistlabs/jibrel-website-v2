import { format } from 'date-fns'

export default ({
  Vue,
  router,
}) => {
  Vue.filter('formatDate', function (date) {
    return format(date, 'MMM. D, YYYY')
  })
  router.addRoutes([
    { path: '/', redirect: '/en/' },
  ])
}
