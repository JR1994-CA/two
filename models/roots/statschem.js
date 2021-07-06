let {buildSchema} = require('graphql');

const schemaStat = buildSchema(`
 
  type Query {
    savHid:Boolean,
    savePerClick:Int,
    saveUnit:Int,
    upgradeLvl:Int,
  }
  
  type Mutation {
  
  
  }
  
`);



module.exports = schemaStat;