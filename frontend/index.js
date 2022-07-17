const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const path = require('path')
const PORT = 3000
require('dotenv').config()
const app = express()
const server = http.createServer(app)
const fs = require('fs')
app.use(express.static(path.join(__dirname + "/public")))

server.listen(PORT, () => {
	console.log("Server listening on port " + PORT);
})