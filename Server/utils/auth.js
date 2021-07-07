const jwt = require('jsonwebtoken');

const secret = '231n2dn29';
const expiration = '2d';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};