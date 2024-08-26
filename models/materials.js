const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
    name: String,
    rarity: String,
    description: String
});

module.exports = mongoose.model('Material', materialSchema)