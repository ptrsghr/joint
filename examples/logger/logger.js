/*jshint node: true*/

var server = {};

server.arrive = function (name) {
    console.log(name + " arrived");
};

exports.server = server;