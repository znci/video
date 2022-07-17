
const express = require('express');
const socketio = require('socket.io')
const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 9000;

const app = express();
const server = http.createServer(app)

app.use(express.static(path.join(__dirname + "/public")))

server.listen(PORT, () => {
	console.log(`Server has been opened on port ${PORT}`)
})