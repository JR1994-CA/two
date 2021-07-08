const m = require('../../models/Stats')

let roots = {
    savHid: () => m.find({}),
    savePerClick: () => m.find({}),
    saveUnit: () => m.find({}),
    upgradeLvl: () => m.find({}),
    test: () => 8080,

    make:(async ()=> {
       await m.create({savHid:0,savePerClick:0,saveUnit:15,upgradeLvl:15})
        return 0;
    }),
}

module.exports = roots;


/// user stat root

//graphql user stats schemas