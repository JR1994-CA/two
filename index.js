const {graphqlHTTP} = require ("express-graphql");
const expr = require('express')
const def = require('./routes');
const path = require('path');
const port = process.env.PORT || 4100;
const app = expr();
const ql = require("./routes/GraphQl/Ql")
//app.engine('handlebars', hdbar());
//app.set('view engine', 'handlebars');

app.use(expr.urlencoded({ extended: true }))
app.use(expr.json())

app.use(expr.static(path.join(__dirname, 'public')));
app.use(expr.static(path.join(__dirname, 'public/control')));

app.use('/graphql', graphqlHTTP({
    schema: ql.schema,
    rootValue: ql.root,
    graphiql: true,
}));

//Routing
app.use('/', def);

//SERVER CREATION
(async () => {
    //await sql.sync({ force: false });

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})();



