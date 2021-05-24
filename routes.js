const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const APP_ROUTES = [
  {
    page: 'dashboard',
    pattern: '/',
    name : 'dashboard'
  },

  {
    page: 'invoice',
    pattern: '/invoice',
    name : 'invoice'
  },

  {
    page: 'daily',
    pattern: '/daily',
    name : 'daily'
  },

  {
    page: 'account',
    pattern: '/account',
    name : 'account'
  },

  {
    page: 'product',
    pattern: '/product',
    name : 'product'
  },

  {
    page: 'detail',
    pattern: '/detail',
    name : 'detail'
  },

  {
    page: 'market',
    pattern: '/market',
    name : 'market'
  },
]

APP_ROUTES.forEach(route => routes.add(route))
