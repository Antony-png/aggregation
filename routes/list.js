const express = require('express')
const router = express.Router()
const list = require('../models/listModel')

router.get('/', async (req, res) => {
  try {
   const getList = await list.readList()
   res.json(getList.rows)
   } catch (error) {
    console.log(error);
   }
  })

router.post('/', async (req, res) => {
 try {
  const insertList = await list.createList(req)
  res.json(insertList.rows[0])
  } catch (error) {
   console.log(error);
 }
})

router.patch('/:id', async (req, res) => {
  try {
    const updateList = await list.updateList(req.params.id, req.body)
    res.json(updateList.rows[0])
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deleteList = await list.deleteList(req.params.id)
    res.json(deleteList.rows[0])
  } catch (error) {
    console.log(error)
  }
})

module.exports = router