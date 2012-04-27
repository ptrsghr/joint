// Possible generated output for chat.pass.

var pass = require('pass')
var conns = pass.conns;

/*jshint node: true*/

// Global scope stuff goes out here.

exports.bind = function (server, conn) {

  // Functions go in here.

  server.arrive = function (msgCallback) {
    conn.onMsg = msgCallback;
  }

  server.broadcast = function (msg) {
    conn.onMsg(msg);
    var connections = conns();
    for (var c in connections)
      connections[c].onMsg(msg);
  }

}