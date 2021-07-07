let {buildSchema} = require('graphql');

const schemaStat = buildSchema(`
 
  type Query {
    savHid:Boolean,
    savePerClick:Int,
    saveUnit:Int,
    upgradeLvl:Int,
    test:Int
  }
  type Mutation {
        make:Int
    }
 
`);



module.exports = schemaStat;