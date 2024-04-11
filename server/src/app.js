const express = require('express');
const app = express();
const cors = require('cors');
const port = 9000;
const db = require('./database/connection')
const { Weapon, Gun, Score } = require('./models/schema');

app.use(express.json());
app.use(cors())

// Create a new weapon
app.post('/weapons', async (req, res) => {
    try {
        const weapon = new Weapon(req.body);
        const newWeapon = await weapon.save();
        res.status(201).json(newWeapon);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all weapons
app.get('/weapons', async (req, res) => {
    try {
        const weapons = await Weapon.find();
        res.json(weapons);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new score
app.post('/scores', async (req, res) => {
    try {
        const score = new Score(req.body);
        const newScore = await score.save();
        res.status(201).json(newScore);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all scores
app.get('/scores', async (req, res) => {
    try {
        const scores = await Score.find();
        res.json(scores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new gun
app.post('/guns', async (req, res) => {
    try {
        const gun = new Gun(req.body);
        const newGun = await gun.save();
        res.status(201).json(newGun);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all guns
app.get('/guns', async (req, res) => {
    try {
        const guns = await Gun.find();
        res.json(guns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
