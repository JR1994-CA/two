const m = require('../../models/Stats')

let roots = {
    savHid: () => m.find({}),
    savePerClick: () => m.find({}),
    saveUnit: () => m.find({}),
    upgradeLvl: () => m.find({}),
    test: () => 8080,

    setMessage: ({}) =>
    {
        let r = new m({saveUnit})
        return message;
    },

    getMessage: () =>
    {
        return
    }
}

module.exports = roots;


/// user stat root

//graphql user stats schemas