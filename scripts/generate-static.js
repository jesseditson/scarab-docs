/* Generates a static version of the site */
var Handlebars = require('handlebars')
var fs = require('fs')
var path = require('path')
var sections = require('../lib/sections')
var readdir = require('fs-readdir-recursive')

var index = fs.readFileSync(__dirname + '/../views/index.hbs', 'utf8')
var layout = fs.readFileSync(__dirname + '/../views/layouts/main.hbs', 'utf8')

var config = sections.locals
for (var h in sections.helpers) {
  Handlebars.registerHelper(h, sections.helpers[h])
}
var partialsDir = __dirname + '/../views/partials/'
var partials = readdir(partialsDir).filter(f => /\.hbs$/.test(f)).forEach(f => {
  var folder = f.replace(path.basename(f), '')
  var name = folder + path.basename(f, '.hbs')
  var file = fs.readFileSync(partialsDir + f, 'utf8')
  var partial = Handlebars.compile(file)
  Handlebars.registerPartial(name, partial)
})

config.body = Handlebars.compile(index)(config)
var out = Handlebars.compile(layout)(config)

process.stdout.write(out)
