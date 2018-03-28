const db = require('./database')
const Pug = require('./pug.model')
const Coffee = require('./coffee.model')

// VVV assign relations below VVV //
Pug.belongsTo(Coffee, {as: 'favoriteCoffee'})
Pug.belongsToMany(Pug, {as: 'friends', through: 'pug_friend'})
// ^^^ assign relations above ^^^ //

module.exports = {
  db,
  Pug,
  Coffee
}
