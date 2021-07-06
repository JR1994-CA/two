const {Model, DataTypes} = require("sequelize");
const sequelize = require("../connections");
const { graphQl, buildSchema } = require('graphQl');
class savUpgrade extends Model{}

const schema = buildSchema(`
  type Query {
    graphQl: String
  }
`);
 
const root = { graphQl: () => 'graphQl!' };
 
graphQl(schema, '{ graphQl }', root).then((response) => {
  console.log(response);
}); 


savUpgrade.init({

        saveID: {
            type:DataTypes.STRING(15),
            allowNull:false
        },
        unlocks:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        compULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        chipULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        cpuULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        boardULvl: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        robotULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        assemblerULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        fabricatorULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        printerULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },

    },
    {sequelize})

module.exports = savUpgrade;