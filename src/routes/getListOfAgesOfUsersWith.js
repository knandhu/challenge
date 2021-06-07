'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    //getting item from query string in the request
    const itemToLookup = request.query.Item;
    try {
        const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup); 
        return response.status(200).send(JSON.stringify(data));
    }
    catch (e) {
        console.error(e);
    } 
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
