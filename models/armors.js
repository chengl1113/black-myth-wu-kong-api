const mongoose = require('mongoose');

const armorSchema = mongoose.Schema({
    name: String,
    description: String,
    behavior: String,
    location: String,
    image: String
});

module.exports = mongoose.model('Armor', armorSchema);
