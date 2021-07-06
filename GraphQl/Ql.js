let {buildSchema} = require('graphql');
// Construct a schema, using GraphQL schema language

const schema = buildSchema(`
  type Query {
    hello: String
    pie:Int
    
  }
  
`);

// The root provides a resolver function for each API endpoint
const root = {
    hello: () =>
    {
        return 'Hello world!';
    },
    pie: () =>
    {
        return 314;
    }
};

module.exports = {schema, root}