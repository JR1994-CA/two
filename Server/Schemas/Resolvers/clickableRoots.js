const clickable = require('../../models/Clickables')

const clickableRoots = {

    Query: {

        clickable: async() => {
            return clickable.find()
                .populate('tran')
                .populate('comp')
                .populate('Chip')
                .populate('CPU')
                .populate('clickmodifier')
                .populate('cost')
                .populate('mod')
                .populate('curUpgrade')
        },



    }

};

module.exports = clickableRoots;