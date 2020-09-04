const mongoose = require('../config/database');
const { mongo } = require('../config/database');
const Schema = mongoose.Schema;

const GameSchema = new Schema({ name: String });
const IdiomSchema = new Schema({ name: String });

const UserSchema = new Schema({
    avatar: { type: String, required: true },
    name: { type: String, required: true },
    idioms: { type: [IdiomSchema], default: undefined },
    games: { type: [GameSchema], default: undefined },
    description: { type: String, default: "Hey there! I'm using Game Together" },
    hidden: { type: Boolean, default: false },
    created: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('User', UserSchema);