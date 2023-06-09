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
    // we first delete the Chicken to then replace it with the user's request
    try {
        // Chicken deletion
        await Chicken.deleteOne(res.chicken)
        // Chicken creation
        const newchicken = await chicken.save()
        res.status(201).json(newchicken)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }    
})

// Updating One
router.patch('/', async (req, res) => {   
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

router.post('/run', async (req, res) => {   
    try {
        // retrieve the 1st chicken in the database
        const chick = await Chicken.find()
        chick = chick[0]
        const newchicken = await Chicken.updateOne(
            // keep the same data except for the STEPS' increment
            {$set: {
                name: chick.name,
                birthday: chick.birthday,
                weight: chick.weight,
                steps: chick.steps + 1,
                isRunning: chick.isRunning
            }}
        )
        // NB : same modus operandi as PATCH but changing steps' value gives the following error message :
        // "Assignment to constant variable"
        // need to repair ASAP
        res.status(201).json(newchicken)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }    
})


module.exports = router