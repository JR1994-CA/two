let {buildSchema} = require('graphql');
const routes = require('../../routes/Users');

module.exports = buildSchema
    (`
    
    type User {
        _id:Int!
        name:String!
        email:String!
        password:String!
    }
    
    type UserInput {
        email: String!
        password: String!
    
    type Query {
        me: User
    }
    
    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }
    
    type Mutation {
        signup (username: String!, email: String!, password: String!): String
        login (email: String!, password: String!): AuthData
    }
    `
    );


