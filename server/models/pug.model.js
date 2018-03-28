const Sequelize = require('sequelize')
const db = require('./database')
const Coffee = require('./coffee.model')

const Pug = db.define('pugs', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  biography: {
    type: Sequelize.TEXT
  }
})

Pug.prototype.isPuppy = function () {
  return this.age < 1
}

Pug.prototype.shortBio = function () {
  return this.biography.split(/(\.|\?|!)/gi)[0]
}

Pug.findByCoffee = function (name) {
  return this.findAll({
    include: [{model: Coffee, where: {name}, as: 'favoriteCoffee'}]
  })
}

Pug.beforeValidate((pug) => {
  pug.name = `${pug.name[0].toUpperCase()}${pug.name.slice(1)}`
})

module.exports = Pug
