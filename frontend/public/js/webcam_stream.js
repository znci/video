var userIsStreaming = false;
function toggleStream() {
	var video = document.querySelector("#videoElement");
	if (userIsStreaming === false) {
		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({video: true})
			.then(function(stream) {
				video.srcObject = stream;
				document.getElementById("usernameoverlay").classList.replace("username","username-streaming")
				document.querySelector(".streamingMessageOverlay").innerHTML = "Streaming"
				userIsStreaming = true;
			})
			.catch(function(err0r) {
				console.log("Something went wrong!");
			});
		}
	}
	else {
		video.srcObject = null
		userIsStreaming = false;
		document.getElementById("usernameoverlay").classList.replace("username-streaming","username")
		document.querySelector(".streamingMessageOverlay").innerHTML = ""
	}
}

toggleStream()