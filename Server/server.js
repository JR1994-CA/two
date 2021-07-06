const mongoose = require('mongoose');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/silicon-clicker2', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

const mongoose = require('mongoose')
mongoose
.connect(`mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@cluster0-yhukr.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority`) 
.then( () => {
    app.listen({ port: 3000 }, () => {
        console.log('Your Apollo Server is running on port 3000')
    })
})
.error( () => {
    console.error('Error while connecting to MongoDB');
}) 

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

// Notice how I have passed the connection string to the connect method. You'll have to replace the <username> and the <password> strings with your username and password respectively.

// The username, password, and the database will vary as per the environment (DEV, PROD). So, let's put them in a separate env file. As we're already using nodemon, we can fetch these environment-specific variables using the nodemon.json file. Create a nodemon.json file at the root level and dump in the following code: 

// I'm now using the environment specific values for databases, username and password. Please note: I've moved the app.listen method in the resolve method. The server will run on port 3000 once the MongoDB connection is successful.

// The name of the database is fds. The MongoDB Atlas will automatically create the database if it doesn't already exist.

// Restart your server. If everything is set up correctly, you should see no errors on the console. Head over to localhost:3000/graphql to see the shiny GraphiQL interface provided by Apollo.  


