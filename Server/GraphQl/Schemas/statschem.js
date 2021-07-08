const { gql } = require('apollo-server-express');

const statTypeDefs = gql`
 
  type Stats {
      user: User,
      savHid:Boolean,
      savePerClick:Int,
      saveUnit:Int,
      upgradeLvl:Int,
  }
  
  type Mutation {
  
  
  }
  
`);



module.exports = statTypeDefs;