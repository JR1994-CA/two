const bcrypt = require('./bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../GraphQl/Schemas/UserSchem');

module.exports = {
    createUser: async args => {
        try {
            //Making sure User doesnt already exists
            const existingUser = await User.findOne({ email: args.userInput.email});
            if(existingUser) {
                throw new Error('User exists already.');
            }
            //creates new hashed password up to 12 characters long
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

            const user = new User({
                name: args.userInput.name,
                email: args.userInput.email,
                password: hashedPassword
            });
            const result = await user.save();

            return { ...result._doc, password: null, _id:result.id };
        } catch (err) {
            throw err;
        }
    },
    login: async ({ email, password }) => {
        const user = await User.findOne({email: email});
        if (!user) {
            throw new Error('User does not exist!');
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if(!isEqual) {
            throw new Error('Password is incorrect!');
        }
        const token = jwt.sign(
            {
                userId: user.id, email: user.email
            },
            'thisourkeyLMAO',
            {
                expiresIn: '1h'
            }
        );
        return {userId: user.id, token: token, tokenExpiration: 1};
    }


};