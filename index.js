var exphbs  = require('express-handlebars')
var express = require('express')
var scarab = module.exports = require('scarab-spa')
var sections = require('./lib/sections')

for (var l in sections.locals) {
  scarab.locals[l] = sections.locals[l]
}

/**
 * To attach a simple route to the application,
 * define express-style routes or middleware directly on scarab.
 *
 * In this context, scarab is just an express app,
 * and can be treated exactly like one.
 */
scarab.get('/', (req, res, next) => {
  res.render('index', {
    helpers: sections.helpers
  })
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
