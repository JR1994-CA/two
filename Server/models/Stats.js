const { Schema, model } = require('mongoose');



const statsSchema = new Schema(
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
        },
        clickables: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Clickable'
            }
        ],

    }
);

const Stats = model('Stats', statsSchema);
module.exports = Stats;
