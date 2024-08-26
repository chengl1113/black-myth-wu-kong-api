const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema({
    name: String,
    rarity: String,
    cost_will: Number,
    effect: String,
    type: String
});

module.exports = mongoose.model('Medicine', medicineSchema);