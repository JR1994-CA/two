const { Schema, model } = require('mongoose');


const StatsSchema = new Schema(
    {
        savHid: {
            saveID: { type: String, maxlength: 15 },
            type: Boolean,
            default: true
        },
        savePerClick: {
            saveID: { type: String, maxlength: 15 },
            type: Number,
            default: 0
        },
        savePerSec: {
            saveID: { type: String, maxlength: 15 },
            type: Number,
            default: 0
        },
        saveUnit: {
            saveID: {type: String, maxlength: 15},
            type: Number,
            default: 0
        },
        upgradeLvl: {
            saveID: { type: String, maxlength: 15 },
            type: Number,
            default: 0
        }

    }
);

const Stats = model('StatsSchema', StatsSchema);
module.exports = Stats;
