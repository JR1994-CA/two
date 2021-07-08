const { Schema, model } = require('mongoose');
const stats = require('./Stats');


const TransistorSchema = new Schema({
    name: {type: String, default: "transistor"},
    count: { type: Number, default: 0},
    id: { type: Number, default: 1},
    isHide: false
});

const CompSchema = new Schema({
    name: {type: String, default: "comp"},
    count: { type: Number, default: 0},
    id: { type: Number, default: 2,
    }
});

const ChipSchema = new Schema({
    name: {type: String, default: "chip"},
    count: { type: Number, default: 0},
    id: { type: Number, default: 3}
});

const CPUSchema = new Schema({
    name: {type: String, default: "cpu"},
    count: { type: Number, default: 0},
    id: { type: Number, default: 4}
});

const ClickableSchema = new Schema(
    {
        children: [
            TransistorSchema,
            CompSchema,
            ChipSchema,
            CPUSchema],

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
const Transistor = model('Transistor', TransistorSchema);
const Comp = model('Comp', CompSchema);
const Chip = model('Chip', ChipSchema);
const CPU = model('CPU', CPUSchema);


module.exports = {
    Clickable,
    Transistor,
    Comp,
    Chip,
    CPU
};