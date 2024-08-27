const express = require('express');
const router = express.Router();
const Material = require('../models/materials');

// Get all materials
router.get('/materials', async (req, res) => {
    try {
        const materials = await Material.find();
        res.json({
            success: true,
            count: materials.length,
            data: materials
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;