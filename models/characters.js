const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    name: String,
    description: String,
    behavior: String,
    location: String,
    image: String
});

module.exports = mongoose.model('Character', characterSchema);
