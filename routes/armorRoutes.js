const express = require('express');
const router = express.Router();
const Armor = require('../models/armors');

// Get all characters
router.get('/armors', async (req, res) => {
    try {
        const armors = await Armor.find();
        console.log(armors);
        res.json({
            success: true,
            count: armors.length,
            data: armors
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;