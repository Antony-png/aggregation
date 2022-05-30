const express = require('express')
const router = express.Router()
const client = require('../models/connectionToDB')
const agg = require('../models/aggregationModel')
const url = require('url')

router.get('/:listId/tasks', async (req, res) => {
  try {
    if (req.query.all === 'false') {
      let trueLists = await agg.listsFalse(req.params.listId)
      res.json(trueLists.rows)
    } else {
      let falseLists = await agg.listsTrue(req.params.listId)
      res.json(falseLists.rows)
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router