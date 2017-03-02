const express = require('express')
const apiRoutes = require('../src/apiRoutes')

const app = express()

app.use('/', apiRoutes)

app.use('*', function (req, res, next) {
  res.setHeader("Content-Type", "application/json")
  return next()
})

module.exports = app
