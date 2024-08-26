const express = require('express');
const router = express.Router();
const Weapon = require('../models/weapons');

// Get all weapons
router.get('/weapons', async (req, res) => {
    try {
        const weapons = await Weapon.find();
        res.json({
            sucess: true,
            count: weapons.length,
            data: weapons
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;