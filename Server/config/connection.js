const mongoose = require('mongoose');
const password = require('../secrets')

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Student2:' + password + '@cluster0.equy6.mongodb.net/FinalProject?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;
