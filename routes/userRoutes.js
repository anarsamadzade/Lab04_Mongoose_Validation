const express = require('express');
const User = require('../models/User');

const router = express.Router();

// ✅ GET route to fetch all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});

// ✅ POST route to create a new user
router.post('/users', async (req, res) => {
    const { username, email, city, website, zipcode, phone } = req.body;

    try {
        const newUser = new User({
            username,
            email,
            city,
            website,
            zipcode,
            phone
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully', newUser });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error: error.message });
    }
});

module.exports = router;
