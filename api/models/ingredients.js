const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    name: String,
    rarity: String,
    cost_will: Number,
    description: String
});

module.exports = mongoose.model('Ingredient', ingredientSchema);