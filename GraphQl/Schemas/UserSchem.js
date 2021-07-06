let {buildSchema} = require('graphql');
const routes = require('../../routes/Users');

const User = buildSchema

    const typeDefs = `
    type User {
    id:Int!
    username:String!
    password:String!
    }
    
    type Query {
    me: User
    }
    
    type Mutation {
    adding (username: String!, password: String!): String
    login (username: String!, password: String!): String
    }
    `



module.exports = buildSchema({typeDefs, routes });