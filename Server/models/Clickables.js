const { Schema, model } = require('mongoose');
const User = require('./User');

const ClickableSchema = new Schema(
    {


        transistors: { type: Number, default: 0 },
        comps: { type: Number, default: 0 },
        chips: { type: Number, default: 0 },
        cpus: { type: Number, default: 0 },

        clickModifier: { type: Number, default: 1 },
        cost: {
            transistor:{ type: Number, default: 0 },
            comp: { type: Number, default: 0 },
            chip: { type: Number, default: 0 },
            cpu: { type: Number, default: 0 }
        },
        mod: {
            click: { type: Number, default: 0 },
            per: { type: Number, default: 0 }
        },
        curUpgrade:{ type: Number, default: 0 },
        isHide: { type: Boolean, default: true },
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const Clickable = model('Clickable', ClickableSchema);



module.exports = {
    Clickable
};