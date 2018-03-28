const router = require('express').Router()
const {Coffee} = require('../models')

// Your code here!
// Remember that these routes are already mounted on
// /api/coffee!

router.get('/', (req, res, next) => {
  Coffee.findAll()
    .then(coffee => res.json(coffee))
    .catch(next)
})

router.get('/ingredients/:name', (req, res, next) => {
  Coffee.findByIngredient(req.params.name)
    .then(cof => res.json(cof))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Coffee.findById(req.params.id)
    .then(coffee => {
      if (coffee) {
        return res.json(coffee)
      }
      const err = new Error('Not found')
      err.status = 404
      next(err)
    })
})

router.post('/', (req, res, next) => {
  Coffee.create(req.body)
    .then(cof => res.status(201).json(cof))
    .catch(next)
})

module.exports = router
