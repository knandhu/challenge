'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./routes');
var cors = require('cors');

// app.get('/', (req, res) => res.send('Hello world!'));
// server config
const port = process.env.PORT || 8080;
app.use(cors());
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });


// register routes
registerRoutes(app);





app.use(express.static(__dirname + '../../public'));

var server = app.listen(5000);


// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;


