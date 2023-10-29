const dotenv = require('dotenv');
dotenv.config();

const config = {
    API_GATEWAY_URL: process.env.API_GATEWAY_URL,
    SERVER_PORT: process.env.SERVER_PORT,
}

module.exports = config;