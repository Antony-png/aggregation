const express = require('express')
const router = express.Router()
const tasks = require('./task')
const list = require('./list')
const dashboard = require('./dashboard')
const collection = require('./collection')
const lists = require('./aggregation')

router
  .use('/tasks', tasks)
  .use('/lists', list)
  .use('/dashboard', dashboard)
  .use('/collection', collection)
  .use('/lists', lists)

module.exports = router