const { Schema, model, Types } = require('mongoose');
const stats = require('./Stats');

const Chip = new Schema(
    {
        count: { type: Integer, default: 0 },
        cost: {
            board:{ type: Integer, default: 0 },
            comp: { type: Integer, default: 0 },
            chip: { type: Integer, default: 0 },
            cpu: { type: Integer, default: 0 }
        },
        mod: {
            click: { type: Integer, default: 0 },
            per: { type: Integer, default: 0 }
        },
        curUpgrade:{ type: Integer, default: 0 },
        isHide: { type: Boolean, default: true },
        currStats: {
            type: [stats],
            get: currStats => stats[currStats]
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

Chip.virtual('getStats').get(function() {
    return this.currStats;
})

const Chip = model('Chip', Chip);

module.exports = Chip;