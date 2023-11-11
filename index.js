const xml = require('fs').readFileSync('service.wsdl', 'utf8');
const soap = require('soap');
const express = require('express');
const bodyParser = require('body-parser');

const { SERVER_PORT } = require('./config');
const habitusService = require('./services/categories.service');

const app = express();

app.use(bodyParser.raw({ type: function () { return true; }, limit: '5mb' }));
app.listen(SERVER_PORT, function () {
    //Note: /wsdl route will be handled by soap module
    //and all other routes & middleware will continue to work
    const server = soap.listen(app, '/wsdl', habitusService, xml, () => {
        console.log('server initialized, listening on port ' + SERVER_PORT + '...');
    });

    server.log = function (type, data) {
        //console.log(type, data);
    };


});