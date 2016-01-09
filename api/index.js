var express = require('express')
var router = module.exports = express.Router()

router.get('/resource', (req, res, next) => {
  res.json({ 'api': 'resource' })
})
