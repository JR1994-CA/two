const { gql } = require('apollo-server-express');

const statTypeDefs = gql`
 
  type Stats {
      user: User,
      transistors:Int,
      comps:Int,
      chips:Int,
      cpus:Int,
      savHid:Boolean,
      savePerClick:Int,
      saveUnit:Int,
      upgradeLvl:Int,
  }
  
  type Query {
      
      
  }
  

`;



module.exports = statTypeDefs;