const mongoose = require('mongoose');

const weaponSchema = mongoose.Schema({
    name: String,
    description: String,
    behavior: String,
    location: String,
    image: String
});

module.exports = mongoose.model('Weapon', weaponSchema)