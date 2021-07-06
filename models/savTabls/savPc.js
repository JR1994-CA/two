const {Model, DataTypes} = require("sequelize");
const sequelize = require("../connections");
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



class savPerClick extends Model{}

savPerClick.init({

        saveID: {
            type:DataTypes.STRING(15),
            allowNull:false
        },
        comp: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        chip: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        cpu: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        board: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },

    },
    {sequelize})

module.exports = savPerClick;