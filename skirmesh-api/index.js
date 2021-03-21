// let app = require('express')();
// let http = require('http').Server(app);
// let io = require('socket.io')(http);

// io.on('connection', (socket) => {

//     // Log whenever a controller connects
//     console.log('controller connected');

//     // Log whenever a client disconnects from our websocket server
//     socket.on('disconnect', function(){
//         console.log('controller disconnected');
//     });

//     // When we receive a 'message' event from our client, print out
//     // the contents of that message and then echo it back to our client
//     // using `io.emit()`
//     socket.on('new-message', (message) => {
//         console.log("Node update message Received: " + message);
//         io.emit('new-message', {type:'new-message', text: message});    
//     });
// });

// // Initialize our websocket server on port 5000
// http.listen(5000, () => {
//     console.log('started on port 5000');
// });



const express = require('express')
const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 5000;

io.on('connection', (socket) => {
    console.log('controller connected');

    socket.on('disconnect', function(){
        console.log('controller disconnected');
    });

    socket.on('new-message', (message) => {
        console.log(message,'wegot msg')
        io.emit("new-message", { mapData: message });
       
    });

});
// io.emit("new-message");
server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
