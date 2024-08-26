const mongoose = require('mongoose');

const armorSchema = mongoose.Schema({
    name: String,
    rarity: String,
    defense: Number,
    set_bonus: String,
    set: String,
    effect: String,
    type: String
});

module.exports = mongoose.model('Armor', armorSchema);
