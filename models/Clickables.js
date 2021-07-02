const { Schema, model, Types } = require('mongoose');
const stats = require('./Stats');


const TransistorSchema = new Schema({
    name: {type: String, default: "transistor"},
    count: { type: Integer, default: 0},
    id: { type: Integer, default: 1},
    isHide: false
});

const CompSchema = new Schema({
    name: {type: String, default: "comp"},
    count: { type: Integer, default: 0},
    id: { type: Integer, default: 2,
    }
});

const ChipSchema = new Schema({
    name: {type: String, default: "chip"},
    count: { type: Integer, default: 0},
    id: { type: Integer, default: 3}
});

const CPUSchema = new Schema({
    name: {type: String, default: "cpu"},
    count: { type: Integer, default: 0},
    id: { type: Integer, default: 4}
});

const ClickableSchema = new Schema(
    {
        children: [
            TransistorSchema,
            CompSchema,
            ChipSchema,
            CPUSchema],

        clickModifier: { type: Integer, default: 1 },
        cost: {
            transistor:{ type: Integer, default: 0 },
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