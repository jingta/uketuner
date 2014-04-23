define([
    'jquery'
], function($){

    var initAudio = function() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                                 navigator.mozGetUserMedia || navigator.msGetUserMedia;
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	var context = new AudioContext();

        if (navigator.getUserMedia) {
          // Good to go! 
/*          navigator.webkitGetUserMedia({audio:true}, gotStream, function(e) {
            alert('Error getting audio');
            console.log(e);
        });
*/      } else {
        alert('getUserMedia() is not supported in your browser');
      }
    };

    var initialize = function(){
//	alert('init audio..');
	initAudio();
    }

    return {
	initialize: initialize
    };
});