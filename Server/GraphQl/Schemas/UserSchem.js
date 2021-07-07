const { gql } = require('apollo-server-express');


const userSchema = buildSchema
    (`
    
    type User {
        _id:Int!
        name:String!
        email:String!
        password:String!
    }
    
    type UserInput {
        name: String!
        email: String!
        password: String!
    
    type Query {
        users: [User]
        user(email: String!): User
    }
    
    type AuthData {
        user:User
        token: ID!
    }
    
    type Mutation {
        createUser(userInput: UserInput): User
        
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `
    );

module.exports = userSchema;

