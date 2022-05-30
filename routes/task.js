const express = require('express')
const router = express.Router()
const task = require('../models/taskModel')

router.get('/', async (req, res) => {
  try {
   const getTask = await task.readTask()
   res.json(getTask.rows)
   } catch (error) {
    console.log(error);
   }
  })

router.post('/', async (req, res) => {
 try {
  const insertTask = await task.createTask(req.body)
  res.json(insertTask.rows[0])
  } catch (error) {
   console.log(error);
 }
})

router.patch('/:id', async (req, res) => {
  try {
    const updateTask = await task.updateTask(req.body, req.params.id)
    res.json(updateTask.rows[0])
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deleteTask = await task.deleteTask(req.params)
    res.json(deleteTask.rows[0])
  } catch (error) {
    console.log(error)
  }
})

module.exports = router