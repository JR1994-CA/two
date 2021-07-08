const stat = require('../../models/Stats')

const statRoots = {

    Query: {

        stats: async (parent, {_id}) => {
            return Stat.findOne({_id})

        }

    },
}

module.exports = statRoots;


