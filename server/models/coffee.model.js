const Sequelize = require('sequelize');
const db = require('./database');
const Op = Sequelize.Op;

const Coffee = db.define('coffee', {
  // your code here
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
});

Coffee.prototype.getIngredients = function() {
  return this.ingredients.join(', ');
};

Coffee.findByIngredient = async function(thing) {
  const ingredient = await Coffee.findAll({
    where: {
      ingredients: {
        [Op.contains]: [thing]
      }
    }
  });

  return ingredient;
};

Coffee.beforeValidate(coffee => {
  if (!coffee.ingredients) {
    coffee.ingredients = ['love'];
  } else if (!coffee.ingredients.includes('love')) {
    coffee.ingredients.push('love');
  }
});

module.exports = Coffee;
