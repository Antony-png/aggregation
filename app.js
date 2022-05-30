const express = require('express')
const router = require('./routes')
const app = express()

app.use(express.json())

function logRequest({ method, url }, res, next) {
  console.log(`[${new Date().toISOString()}] ${method} ${url}`);
  next()
}

app.use(logRequest)
app.use(router)


module.exports = app