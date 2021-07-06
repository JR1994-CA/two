const {Sequelize} = require('sequelize');
const config = require('../config');
const { graphQl, buildSchema } = require('graphQl');
const sql = new Sequelize(process.env.JAWSDB_URL,{dialect:"mysql"});

const schema = buildSchema(`
  type Query {
    graphQl: String
  }
`);
 
const root = { graphQl: () => 'graphQl!' };
 
graphQl(schema, '{ graphQl }', root).then((response) => {
  console.log(response);
}); 


module.exports = sql;