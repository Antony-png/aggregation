const express = require('express')
const router = express.Router()
const client = require('../models/connectionToDB')
const agg = require('../models/aggregationModel')

router.get('/', async (req, res) => {
  try {
    let count = await agg.count()
    let lists = await agg.lists()
    let today = count.rows[0]
    res.json({
      projects: lists.rows,
      today: today.count
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = router