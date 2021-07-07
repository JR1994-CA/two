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
  setMessage(message: String): String
    }
 
`);



module.exports = schemaStat;