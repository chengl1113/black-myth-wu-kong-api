const express = require('express');
const router = express.Router();
const Character = require('../models/characters');


// Get all characters
router.get('/characters', async (req, res) => {
    try {
        const characters = await Character.find();
        console.log(characters);
        res.json({
            success: true,
            count: characters.length,
            data: characters
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;