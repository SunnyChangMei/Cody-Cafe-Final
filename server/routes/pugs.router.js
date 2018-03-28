const router = require('express').Router()
const {Pug} = require('../models')

router.get('/', (req, res, next) => {
  Pug.findAll()
    .then(pugs => res.json(pugs))
    .catch(next)
})

router.get('/favoriteCoffee/:name', (req, res, next) => {
  Pug.findByCoffee(req.params.name)
    .then(pugs => res.json(pugs))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Pug.findById(req.params.id)
    .then(pug => {
      if (pug) {
        return res.json(pug)
      }
      const err = new Error('Not found')
      err.status = 404
      next(err)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Pug.create(req.body)
    .then(pug => res.status(201).json(pug))
    .catch(next)
})

router.put('/:id', async (req, res, next) => {
  try {
    const pug = await Pug.findById(req.params.id)
    if (!pug) {
      const err = new Error('Not found')
      err.status = 404
      return next(err)
    }
    const pupdate = await pug.update(req.body)
    res.json(pupdate)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const pug = await Pug.findById(req.params.id)
    if (!pug) {
      const err = new Error('Not found')
      err.status = 404
      return next(err)
    }
    await pug.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

module.exports = router
