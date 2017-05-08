#!/usr/bin/env node
const zmq = require('zeromq')
const sock = zmq.socket('rep');
sock.bind(process.argv[2] || "tcp://127.0.0.1:7777");
sock.on("message", function(data) {
    sock.send(data + " back");
});