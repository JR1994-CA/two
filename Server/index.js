const {graphqlHTTP} = require ("express-graphql");
const expr = require('express')
const def = require('./routes');
const path = require('path');
const port = process.env.PORT || 4100;
const app = expr();
const ql = require("./GraphQl/Ql")
const mongoo = require('mongoose')
const roots = require('./GraphQl/Schemas')
const {graphql} = require('graphql')


//app.engine('handlebars', hdbar());
//app.set('view engine', 'handlebars');
mongoo.connect('mongodb://localhost/pie',{ useNewUrlParser: true, useUnifiedTopology: true })

app.use(expr.urlencoded({ extended: true }))
app.use(expr.json())


console.log(path.join(__dirname,"../tsclient/build/"));
app.use(expr.static(path.join(__dirname, '../tsclient/build/')));
// app.use(expr.static(path.join(__dirname, 'public')));
// app.use(expr.static(path.join(__dirname, 'public/control')));


app.use('/graphql', graphqlHTTP({
    schema: roots.sStat,
    rootValue: roots.rStat,
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



