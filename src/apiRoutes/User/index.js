const express = require('express')
const app = express()

app.get('*',(req,res) => {
  res.json({
    name: "Jacob",
    email: "jacobgoh101@gmail.com"
  })
})

module.exports = app;
