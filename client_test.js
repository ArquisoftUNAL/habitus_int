
var soap = require('soap');
var url = 'http://localhost:9000/wsdl?wsdl';

// Create client
soap.createClient(url,
    (err, client) => {
        if (err) {
            throw err;
        }

        client.on('request', (xml) => {
            console.log("Request", xml);
        });

        /* 
        * Parameters of the service call: they need to be called as specified
        * in the WSDL file
        */
        const args = {
            id: '4'
        };
        // call the service
        client.CategoriesQuery(args, function (err, res) {
            if (err) {
                throw err;
            }

            // print the service returned result
            console.log("Res", res);
        });
    });