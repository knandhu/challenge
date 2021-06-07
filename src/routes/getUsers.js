'use strict';
const mockDBCalls = require('../database/index.js');

const getUsersHandler = async (request, response) => {
    console.log('hitting be');
    const data = await mockDBCalls.getUsers();
    // console.log('data',data);
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/users', getUsersHandler);
};
