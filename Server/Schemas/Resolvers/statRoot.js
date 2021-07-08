const stat = require('../../models/Stats')

const statRoots = {

    Query: {

        stats: async (parent, {_id}) => {
            const statData = await stat.findOne({_id})
                .populate('savHid')
                .populate('savePerClick')
                .populate('saveUnit')
                .populate('upgradeLvl')


            return statData;
        }

    },
}

module.exports = statRoots;


