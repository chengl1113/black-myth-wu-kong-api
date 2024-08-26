const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// Import routes
const armorRoutes = require('./routes/armorRoutes');
const characterRoutes = require('./routes/characterRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const keyItemRoutes = require('./routes/keyItemRoutes');
const materialRoutes = require('./routes/materialRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const weaponRoutes = require('./routes/weaponRoutes');

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
// all routes are prefixed with '/api'
app.use('/api', characterRoutes);
app.use('/api', armorRoutes);
app.use('/api', ingredientRoutes);
app.use('/api', keyItemRoutes);
app.use('/api', materialRoutes);
app.use('/api', medicineRoutes);
app.use('/api', weaponRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
