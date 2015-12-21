/**
 * Created by iallai on 11/12/2015.
 */
'use strict';
const Hapi = require('hapi');
const apiRoute = require("./apiRoute");
//const orm=require("orm");
//const model=require("./model");


// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

//路由
server.route(apiRoute.route());

//server.route();
// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('服务已运行在:', server.info.uri);
});