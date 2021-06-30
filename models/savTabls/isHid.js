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



class savHid extends Model{}

savHid.init({

        saveID: {
            type:DataTypes.STRING(15),
            allowNull:false
        },

        chip: {
            defaultValue:0,
            type:DataTypes.BOOLEAN
        },
        cpu: {
            defaultValue:0,
            type:DataTypes.BOOLEAN
        },
        board: {
            defaultValue:0,
            type:DataTypes.BOOLEAN
        },
        robot: {
            defaultValue:0,
            type:DataTypes.BOOLEAN
        },
        printer: {
            defaultValue:0,
            type:DataTypes.BOOLEAN
        },
        fab: {
            defaultValue:0,
            type:DataTypes.BOOLEAN
        },
        assemble: {
            defaultValue:0,
            type:DataTypes.BOOLEAN
        },



    },
    {sequelize})

module.exports = savHid;