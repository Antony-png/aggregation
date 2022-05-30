const express = require('express')
const router = express.Router()
const client = require('../models/connectionToDB')
const agg = require('../models/aggregationModel')

router.get('/today', async (req, res) => {
  try {
    let list = await agg.today() 
    res.json(list.rows)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router