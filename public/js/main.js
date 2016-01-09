var request = require('superagent')

request
  .get('/api/resource')
  .end((err, response) => {
    if (err) return console.error('unable to contact api.', err)
    console.log('successfully requested api.', response.body)
  })
