let {buildSchema} = require('graphql');
const routes = require('../../routes/Users');

const User = buildSchema

    const typeDefs = `
    type User {
    id:Int!
    name:String!
    email:String!
    password:String!
    }
    
    type Query {
    me: User
    }
    
    type Mutation {
    signup (username: String!, email: String!, password: String!): String
    login (email: String!, password: String!): String
    }
    `



module.exports = buildSchema({typeDefs, routes });