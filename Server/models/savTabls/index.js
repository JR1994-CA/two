const savUp = require('./savUpgrade');
const savunit = require('./savUnit');
const savps = require ('./savPs');
const savpc = require('./savPc');
const savhid = require('./isHid');
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

module.exports = {savUp , savunit, savps , savpc , savhid}   

