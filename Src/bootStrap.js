//START node --harmony bootStrap.js
var hapi=require("hapi");
var server=new hapi.Server();
server.connect({port:3000});