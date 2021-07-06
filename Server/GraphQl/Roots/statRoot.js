const m = require('../../models/Stats')

let roots = {
        savHid:()=>m.find({}),
        savePerClick:()=>m.find({}),
        saveUnit:()=>m.find({}),
        upgradeLvl:()=>m.find({}),
    }

module.exports = roots;



/// user stat root

//graphql user stats schemas