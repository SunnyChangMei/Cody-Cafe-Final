const router = require('express').Router();
const { Coffee } = require('../models');

// Your code here!
// Remember that these routes are already mounted on
// /api/coffee!
router.get('/', async (req, res, next) => {
  try {
    res.status(200).send(await Coffee.findAll());
  } catch (error) {
    next(error);
  }
});

router.get('/:coffeeId', async (req, res, next) => {
  try {
    const coffeeId = await Coffee.findById(req.params.coffeeId);
    if (!coffeeId) {
      res.sendStatus(404);
    } else {
      res.status(200).send(coffeeId);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/ingredients/:ingredientName', async (req, res, next) => {
  try {
    const ingredientName = req.params.ingredientName;
    res.status(200).send(await Coffee.findByIngredient(ingredientName));
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCoffee = await Coffee.create(req.body);
    res.status(201).send(newCoffee);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
