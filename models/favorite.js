const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    coin: { type: String},
    user: { type: String}
})

module.exports = mongoose.model('Favorite', favoriteSchema)