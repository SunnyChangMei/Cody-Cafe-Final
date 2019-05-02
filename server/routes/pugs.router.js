const router = require('express').Router();
const { Pug } = require('../models');

// Your code here!
// Remember that these routes are already mounted on
// /api/pugs!
router.get('/', async (req, res, next) => {
  try {
    res.status(200).send(await Pug.findAll());
  } catch (error) {
    next(error);
  }
});

router.get('/:pugId', async (req, res, next) => {
  try {
    const pugId = req.params.pugId;
    const foundId = await Pug.findById(pugId);
    if (!foundId) {
      res.sendStatus(404);
    } else {
      res.status(200).send(foundId);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/favoriteCoffee/:favoriteCoffeeName', async (req, res, next) => {
  try {
    const favoriteCoffeeName = req.params.favoriteCoffeeName;
    const findCoffee = await Pug.findByCoffee(favoriteCoffeeName);
    res.status(200).send(findCoffee);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newPug = await Pug.create(req.body);
    res.status(201).send(newPug);
  } catch (error) {
    next(error);
  }
});

router.put('/:pugId', async (req, res, next) => {
  try {
    const pugId = req.params.pugId;
    const thisPug = await Pug.findById(pugId);

    if (!thisPug) {
      res.sendStatus(404);
    } else {
      const updatePug = await thisPug.update(req.body);
      res.status(200).send(updatePug);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:pugId', async (req, res, next) => {
  try {
    const pugId = req.params.pugId;
    const thisPug = await Pug.findById(pugId);
    if (!thisPug) {
      res.sendStatus(404);
    } else {
      const deleteId = await thisPug.destroy(req.body);
      res.status(204).send(deleteId);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
