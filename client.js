#!/usr/bin/env node

const zmq = require('zeromq')
const sock = zmq.socket("req");

sock.connect(process.argv[2] || "tcp://127.0.0.1:7777");
sock.on("message", function(data) {
    console.log("recv: " + data);
});

setInterval(function(){
    data = "hello";
    console.log("send: " + data);
    sock.send(data);
}, 1000);