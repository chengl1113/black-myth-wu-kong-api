const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredients');

// Get all ingredients
router.get('/ingredients', async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.json({
            success: true,
            count: ingredients.length,
            data: ingredients
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;