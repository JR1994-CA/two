const { Schema, model, Types } = require('mongoose');

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
        isHide: { type: Boolean, default: true }
        stats: [StatsSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

Chip.virtual('updateStat').get(function() {

});