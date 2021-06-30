const connect = require('./connections');
const save = require('./savTabls');
const { graphQl, buildSchema } = require('graphQl');
const schema = buildSchema(`
  type Query {
    graphQl: String
  }
`);
 
const root = { graphQl: () => 'graphQl!' };
 
graphQl(schema, '{ graphQl }', root).then((response) => {
  console.log(response);
}); 

module.exports = {connect, save};
