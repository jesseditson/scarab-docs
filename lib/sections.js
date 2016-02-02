var fs = require('fs')
var path = require('path')
var sectionDir = path.join(__dirname, '../markdown', 'sections')

var sections = fs.readdirSync(sectionDir)
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

module.exports.helpers = {
  section: name => 'sections/' + name
}
module.exports.locals = {
  sections: sections
}
