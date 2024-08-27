const mongoose = require('mongoose');

const keyItemSchema = mongoose.Schema({
    name: String,
    rarity: String
}, { collection: 'keyItems' });

module.exports = mongoose.model('KeyItem', keyItemSchema);