var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8088, function () {
  console.log('Listening on port 8088...')
})