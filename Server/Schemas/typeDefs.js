const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Clickable {
        tran: [Transistor],
        comp: [Comp],
        Chip: [Chip],
        CPU: [CPU],
        clickmodifier:Int,
        cost: [Cost],
        mod:[Mod],
        curUpgrade:Boolean,
    }

    type Stats {
        _id:Int,
        savHid:Boolean,
        savePerClick:Int,
        saveUnit:Int,
        upgradeLvl:Int,
    }


    type Transistor {
        count: Int,
        isHide:Boolean
    }

    type Comp {
        count: Int,
        isHide:Boolean
    }

    type Chip {
        count: Int,
        isHide:Boolean
    }
    type CPU {
        count: Int,
        isHide:Boolean
    }


    type Cost{
        trans: Int,
        comps: Int,
        chips: Int,
        cpus: Int,
    }
    type Mod {
        click: Int,
        per: Int
    }

    type User {
        _id: ID
        email: String
        messages: Message
    }

    type Message {
        _id: ID
        messageText: String
        createdAt: String
        email: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        messages(username: String): [Message]
        message(_id: ID!): Message
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addMessage(messageText: String!): Message
    }


    `;


module.exports = typeDefs;

