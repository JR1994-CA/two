let {buildSchema} = require('graphql');
const routes = require('../../routes/Users');

module.exports = buildSchema
    (`
    
    type User {
        id:Int!
        name:String!
        email:String!
        password:String!
    }
    
    type UserInput {
        name: String!
        email: String!
        password: String!
    
    type RootQuery {
        login (email: String!, password: String!): AuthData
    }
    
    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }
    
    type RootMutation {
        createUser(userInput: UserInput): User
        
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `
    );


