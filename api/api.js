/**
 * Created by iallai on 11/12/2015.
 */
'use strict';
const Hapi = require('hapi');
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/api/articles',
    handler: function (request, reply) {

        return reply('articles');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('api, ' + encodeURIComponent(request.params.name) + '!');
    }
});
// Start the server
server.start((err) => {

    if (err) {
    throw err;
}
console.log('Server running at:', server.info.uri);
});