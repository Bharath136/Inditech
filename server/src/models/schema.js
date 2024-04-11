const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
    name: String,
    score: Number,
    totalScore: Number
});

const scoreSchema = new mongoose.Schema({
    wins: Number,
    score: Number,
    kills: Number,
});

const gunSchema = new mongoose.Schema({
    name: String,
    capacity: Number,
    image: String,
    type: String
});

const Weapon = mongoose.model('Weapon', weaponSchema);
const Score = mongoose.model('Score', scoreSchema);
const Gun = mongoose.model('Gun', gunSchema);

module.exports = { Weapon, Score, Gun };
