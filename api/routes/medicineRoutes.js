const express = require('express');
const router = express.Router();
const Medicine = require('../models/medicines');

// Get all medicines
router.get('/medicines', async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.json({
            success: true,
            count: medicines.length,
            data: medicines
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;