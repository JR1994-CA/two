const { Schema, model, Types } = require('mongoose');
const stats = require('./Stats');


const CPU = new Schema(

);

const Clickable = new Schema(
    {
        count: { type: Integer, default: 0 },
        clickModifier: { type: Integer, default: 1 },
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

Clickable.virtual('getClickable').get(function() {
    return this.name;
});

Clickable.virtual('getPerSecMod').get(function() {
    return this.mod.per;
});

Clickable.virtual('getClickMod').get(function() {
    return this.mod.click;
});

const Clickable = model('Clickable', Clickable);

module.exports = Clickable;