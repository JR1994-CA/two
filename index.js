const expr = require('express')


const def = require('./routes');
const path = require('path');
const port = process.env.PORT || 3001;
const app = expr();
app.engine('handlebars', hdbar());
app.set('view engine', 'handlebars');

app.use(expr.urlencoded({ extended: true }))
app.use(expr.json())

app.use(expr.static(path.join(__dirname, 'public')));
app.use(expr.static(path.join(__dirname, 'public/control')));

//Routing
app.use('/', def);

//SERVER CREATION
(async () => {
    //await sql.sync({ force: false });

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})();



