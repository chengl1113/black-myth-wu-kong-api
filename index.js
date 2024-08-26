const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// Import routes
const characterRoutes = require('./routes/characterRoutes');
const armorRoutes = require('./routes/armorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

// Use the route
app.use('/api', characterRoutes); // All character routes are prefixed with '/api'
app.use('/api', armorRoutes)

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
