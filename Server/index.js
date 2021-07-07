const {graphqlHTTP} = require ("express-graphql");
const expr = require('express')
const def = require('./routes');
const path = require('path');
const port = process.env.PORT || 4100;
const app = expr();
const ql = require("./GraphQl/Ql")
const mongoo = require('mongoose')
const roots = require('./GraphQl/Schemas')
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { statsschem, UserSchem } = require('./GraphQl/Schemas')


const server = new ApolloServer({
    statschem,
    UserSchem
});

server.applyMiddleware({ app });
//app.engine('handlebars', hdbar());
//app.set('view engine', 'handlebars');
mongoo.connect('mongodb://localhost/pie',{ useNewUrlParser: true, useUnifiedTopology: true })

app.use(expr.urlencoded({ extended: true }))
app.use(expr.json())

app.use(expr.static(path.join(__dirname, 'public')));
app.use(expr.static(path.join(__dirname, 'public/control')));


app.use('/graphql', graphqlHTTP({
    schema: roots.sStat,
    rootValue: roots.rStat,
    graphiql: true,
}));
app.use('/graphql2', graphqlHTTP({
    schema: ql.schema,
    rootValue: ql.root,
    graphiql: true,
}));



//Routing
app.use('/', def);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // log where we can go to test our GQL API
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});



