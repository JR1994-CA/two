const { User, model } = require('mongoose');

const clickable = require('./Clickables');
const transistor = require(./)

const User = new Schema(
    {
        username: {
            type: String,
            required: true,
            maxlength: 50,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            maxlength: 50,
            trim: true,
            unique: true
        },
        clickablesArr: [{

            trans: clickable.



        }],



    }


);