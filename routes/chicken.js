const express = require('express')
const router = express.Router()
const Chicken = require('../models/chickenModel')

// Getting one
router.get('/', async (req, res) => {
  try {
    const chickens = await Chicken.find()
    res.json(chickens)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Creating one
router.post('/', async (req, res) => {
  const chicken = new Chicken({
    name: req.body.name,
    birthday: req.body.birthday,
    weight: req.body.weight,
    steps: req.body.steps,
    isRunning: req.body.isRunning
  })
  try {
    const newchicken = await chicken.save()
    res.status(201).json(newchicken)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Put one
router.put('/', async (req, res) => {
    const chicken = new Chicken({
        name: req.body.name,
        birthday: req.body.birthday,
        weight: req.body.weight,
        steps: req.body.steps,
        isRunning: req.body.isRunning
      })
    
    try {
        await Chicken.deleteOne(res.chicken)
        const newchicken = await chicken.save()
        res.status(201).json(newchicken)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }    
})

// Updating One
router.patch('/', async (req, res) => {
    const chicken = new Chicken({
        name: req.body.name,
        birthday: req.body.birthday,
        weight: req.body.weight,
        steps: req.body.steps,
        isRunning: req.body.isRunning
      })
    
    try {
        const newchicken = await Chicken.updateOne(
            {$set: {
                name: req.body.name,
                birthday: req.body.birthday,
                weight: req.body.weight,
                steps: req.body.steps,
                isRunning: req.body.isRunning
            }}
        )
        res.status(201).json(newchicken)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }    
})

// Deleting One
router.delete('/', async (req, res) => {
  try {
    await Chicken.deleteOne(res.chicken)
    res.json({ message: 'Deleted chicken' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router