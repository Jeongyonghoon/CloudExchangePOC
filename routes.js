const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const APP_ROUTES = [
  {
    page: 'dashboard',
    pattern: '/'
  }
]

APP_ROUTES.forEach(route => routes.add(route))