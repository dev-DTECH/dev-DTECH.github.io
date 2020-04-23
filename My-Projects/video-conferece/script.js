// var connection = new RTCMultiConnection();

// // this line is VERY_important
// connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/";

// // all below lines are optional; however recommended.

// connection.session = {
// 	audio: true,
// 	video: true,
// };
// connection.mediaConstraints = {
// 	audio: true,
// 	video: true,
// };
// connection.sdpConstraints.mandatory = {
// 	OfferToReceiveAudio: true,
// 	OfferToReceiveVideo: true,
// };











// connection.DetectRTC.load(function () {
// 	if (!connection.DetectRTC.hasMicrophone) {
// 		connection.session.audio = false;
// 		connection.mediaConstraints.audio = false;
// 	}
// 	else{
// 		connection.session.audio = true;
// 		connection.mediaConstraints.audio = true;
// 	}

// 	if (!connection.DetectRTC.hasWebcam) {
// 		connection.session.video = false;
// 		connection.mediaConstraints.video = false;
// 	}
// 	else{
// 		connection.session.video = true;
// 		connection.mediaConstraints.video = true;
// 	}
//     // var predefinedRoomId = prompt("Please enter room-id", "amp");
// 	connection.onstream = function (event) {
// 		document.body.appendChild(event.mediaElement);
// 	};
// 	connection.openOrJoin("amp");
// });








// // if (!connection.DetectRTC.hasMicrophone) {
// // 	connection.mediaConstraints.audio = false;
// // 	connection.session.audio = false;
// // }

// // if (!connection.DetectRTC.hasWebcam) {
// // 	connection.mediaConstraints.video = false;
// // 	connection.session.video = false;
// // }



// // connection.onstream = function (event) {
// //     document.body.appendChild(event.mediaElement);
// // };
// // connection.openOrJoin("amp");



// // var predefinedRoomId = prompt("Please enter room-id", "amp");
// // connection.openOrJoin(connection.channel);
















var connection = new RTCMultiConnection();

// this line is VERY_important
connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

connection.session = {
    audio: false,
    video: false,
    data: true // at least data-connection must open if he do not have camera+mic
};

connection.DetectRTC.load(function() {
    // if (connection.DetectRTC.hasMicrophone === true) {
    //     // enable microphone
    //     connection.mediaConstraints.audio = true;
    //     connection.session.audio = true;
    // }

    if (connection.DetectRTC.hasWebcam === true) {
        // enable camera
        connection.mediaConstraints.video = true;
        connection.session.video = true;
    }

    if (connection.DetectRTC.hasMicrophone === false &&
        connection.DetectRTC.hasWebcam === false) {
        // he do not have microphone or camera
        // so, ignore capturing his devices
        connection.dontCaptureUserMedia = true;
    }

    if (connection.DetectRTC.hasSpeakers === false) { // checking for "false"
        alert('Please attach a speaker device. You will unable to hear the incoming audios.');
    }

	connection.openOrJoin('your-room-id');
});