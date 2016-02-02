#!/usr/bin/env node

// Generates views by converting the files in the markdown folder to partials.

var marked = require('marked')
var highlight = require('highlight.js')
var readdir = require('fs-readdir-recursive')
var fs = require('fs')
var path = require('path')
var markdownDir = path.join(__dirname, '..', 'markdown')
var viewsDir = path.join(__dirname, '..', 'views', 'partials')
var renderer = new marked.Renderer()

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  langPrefix: 'hljs ',
  highlight: function(code) {
    return highlight.highlightAuto(code).value
  }
})

var files = readdir(markdownDir)
var completeCount = 0

function completed(filename, err, content) {
  if (err) {
    process.stderr.write(`Failed parsing ${filename}: ${err.message}`)
  } else {
    fs.writeFileSync(path.join(viewsDir, filename.replace(/\.md$/, '.hbs')), content, 'utf8')
  }
  if (++completeCount == files.length) {
    process.stdout.write('Finished generating views.')
  }
}

files.forEach(function(file) {
  var markdown = fs.readFileSync(path.join(markdownDir, file), 'utf8')
  marked(markdown, completed.bind(null, file))
})
