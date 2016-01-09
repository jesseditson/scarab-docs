var exphbs  = require('express-handlebars')
var scarab = module.exports = require('scarab-spa')

var fs = require('fs')
var path = require('path')
var sectionDir = path.join(__dirname, 'markdown', 'sections')

var sections = scarab.locals.sections = fs.readdirSync(sectionDir)
  .filter(f => /\.md$/.test(f))
  .map(f => {
    var name = f.replace(/\.md$/, '')
    var title = name.replace(/^\d+\./, '')
    var link = title.toLowerCase()
    return {
      name: name,
      title: title.replace('-', ' '),
      link: link
    }
  })

/**
 * To attach a simple route to the application,
 * define express-style routes or middleware directly on scarab.
 *
 * In this context, scarab is just an express app,
 * and can be treated exactly like one.
 */
scarab.get('/', (req, res, next) => {
  res.render('index', {
    helpers: {
      section: name => 'sections/' + name
    }
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
