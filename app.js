const app = require('express')()

app.get('/', (req, res) => {
  res.send('hello')
})

module.exports = app
