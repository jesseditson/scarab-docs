var scarab = module.exports = require('scarab-spa')

/**
 * To attach a simple route to the application,
 * define express-style routes or middleware directly on scarab.
 *
 * In this context, scarab is just an express app,
 * and can be treated exactly like one.
 */
scarab.get('/', (req, res, next) => {
  /**
   * if your app requires authentication (it probably should),
   * just skip requests that don't have a user. Authentication is handled upstream
   * by the base scarab app.
   */
  if (!req.user) return next()
  res.render('index')
})

/**
 * If you would like more robust routing, you can use express routers as middleware:
 *
 * var express = require('express')
 * var router = express.Router()
 *
 * router.get('/some-path', (req, res, next) => { res.render('myView', {}) })
 *
 * scarab.use(router)
 */

if (require.main === module) scarab.serve()
