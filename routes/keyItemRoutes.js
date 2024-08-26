const express = require('express');
const router = express.Router();
const KeyItem = require('../models/keyItems.js');

// Get all key items
router.get('/keyItems', async (req, res) => {
    try {
        const keyItems = await KeyItem.find();
        console.log(keyItems);
        res.json({
            success: true,
            count: keyItems.length,
            data: keyItems
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;