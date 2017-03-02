const express = require('express')
const User = require('./User')

const app = express()

app.use('/user',User)

module.exports = app
