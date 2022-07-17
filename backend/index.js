// idk

/*

API For znci/video

This will handle:
 - Streaming webcams
 - handling the video stream
 - if the user is streaming a video, it will display it to *all* users (mostly frontend)

 This will most likely be containerized for scaling and security purposes.

*/

// import the necessary modules
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
require('dotenv').config()
// set the port
const port = process.env.PORT || 3000;

// routes:
// - /api/video/create_stream (routes/video.js)
// - /api/video/get_stream (routes/video.js)
// - /api/video/stop_stream (routes/video.js)
// - /api/chat/send_message (routes/chat.js)
// - /api/chat/get_messages (routes/chat.js)
// - /api/auth/this-is-firebase-we're-not-doing-this-by-hand (routes/auth.js)
// - /api/auth/sign_in (routes/auth.js)

// IMPORT routes
const video = require('./routes/video');
const chat = require('./routes/chat');
const auth = require('./routes/auth');

// route
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/video', video);
app.use('/api/chat', chat);
app.use('/api/auth', auth);

// im too used to flask lol
app.get('/', (req, res) => {
	  res.sendFile(path.join(__dirname + '/index.html'));
});

// serve app
server.listen(port, () => {
	console.log(`Backend Server listening on port ${port}`);
}
);






// soisoisoisoisoisoisoisoisoisoisoisoisoisoisoisoisoisoisoisoisoisoisoisoisoisosiosiosisosisoisosiososissoisosisosososisosisoisoisoiosiosisoisoisoisoisoi