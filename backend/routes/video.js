/*

Hanldes video streaming for znci/video.
This is a route, so requesting /video/blah will give whatever they requested.

Routes:
 - /video/create_stream - creates a stream
 - /video/stream/get_stream?id=::streamid - gets a stream
 - /video/stream/stop_stream - stops a stream
*/

module.exports = function(app){

    app.get('/video/create_stream', function(req, res){
        res.render('', {
            title: 'Create Stream',
			video_stream: true,
        });
		// request camera and microphone
		navigator.getUserMedia({video: true, audio: true}, function(stream) {
			// create a stream from the camera
			var video = document.querySelector('video');
			video.src = window.URL.createObjectURL(stream);
			video.play();
			// give the stream an id
			var stream_id = 'stream_' + Math.floor(Math.random() * 1000000);
			// get user's IP address why do we need this
			var ip = req.connection.remoteAddress;
			// split ip to last 4 digits and replace everything else with x
			var ip_last_4 = ip.split('.').slice(-4).join('.');

			
			console.log(`NEW STREAM: IP: ${ip_last_4} ID: ${stream_id}`);
		}
		, function(err) {
			console.log("Error: " + err);
		}
		);

		
    });
	app.get('/video/stream/get_stream', function(req, res){
		var stream_id = req.query.id;
		var ip = req.connection.remoteAddress;
		var ip_last_4 = ip.split('.').slice(-4).join('.');
		console.log(`GET STREAM: IP: ${ip_last_4} ID: ${stream_id}`);
		res.render('', {
			title: 'Stream',
			video_stream: true,
			stream_id: stream_id,
		});
	});
	app.get('/video/stream/stop_stream', function(req, res){
		var stream_id = req.query.id;
		var ip = req.connection.remoteAddress;
		var ip_last_4 = ip.split('.').slice(-4).join('.');
		console.log(`STOP STREAM: IP ${ip_last_4} ID: ${stream_id}`);
		res.render('', {
			title: 'Stream',
			video_stream: true,
			stream_id: stream_id,
		});
	}
	); // the last 2 are a template i gtg for now when back
} //stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express