const WebSocket = require('ws');
const server = new WebSocket.Server({port: '8080'});

// default 'connection'
server.on('connection', (socket) => {

    // listen to incoming messages, 'message' event
    socket.on('message', message => {
        console.log(message)

        // send a message back to the client
        socket.send(`Okay Roger that! ${message}`);
    })

})