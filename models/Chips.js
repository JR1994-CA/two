const { Schema, model, Types } = require('mongoose');

const Chip = new Schema(
    {
        count: {
            type: Integer,
            default: 0
        },
        cost: {
            board: 0,
            comp: 1000,
            chip: 0
        }
    }
)