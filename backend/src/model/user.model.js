const mongoose = require('../config/database');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
require('mongoose-type-email');

const GameSchema = new Schema({ name: String });
const IdiomSchema = new Schema({ name: String });

const UserSchema = new Schema({
    email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    avatar: { type: String, required: false },
    idioms: { type: [IdiomSchema], default: undefined },
    games: { type: [GameSchema], default: undefined },
    description: { type: String, default: "Hey there! I'm using Game Together" },
    discord: { type: String, required: false },
    hidden: { type: Boolean, default: false },
    created: { type: Date, default: Date.now() },
});

UserSchema.pre('save', async function encrypt() {
    this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.pre('save', async function avatar() {
    const num = Math.floor(Math.random() * 1000);
    this.avatar = `https://api.adorable.io/avatars/285/${num}.png`;
});

module.exports = mongoose.model('User', UserSchema);