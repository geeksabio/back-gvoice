let index = 0;

var objAudio = [
{'idElement': 'record1', 'url': ''},
{'idElement': 'record2', 'url': ''},
{'idElement': 'record3', 'url': ''},
{'idElement': 'record4', 'url': ''},
{'idElement': 'record5', 'url': ''},
];


let dataRecords = [];

var permission = false;
//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;

var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording
let _words = new Word();



// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext //audio context to help us record
	
	async function init(){
		await _words.load();
		_words.addElements();

	//Inicializamos el array de datos
	for (let i = 0; i < _words._data.length; i++) {
		dataRecords[i] = {};
		
	}
	document.getElementById('contador').innerHTML = "";
	document.getElementById('contador').innerHTML = `<span class="text"><b>${index+1}/${_words._data.length}</b> palabras</span>`;
}

init();

function startRecording() {
	console.log("recordButton clicked");

	document.getElementById('btnstartRecord').style.display = "none";
	document.getElementById('btnstopRecord').style.display = "block";

	/*
		Simple constraints object, for more advanced audio features see
		https://addpipe.com/blog/audio-constraints-getusermedia/
		*/

		var constraints = { audio: true, video:false }

	/*
    	We're using the standard promise based getUserMedia() 
    	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    	*/

    	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    		console.log("initializing Recorder.js ...");

		/*
			create an audio context after getUserMedia is called
			sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
			the sampleRate defaults to the one set in your OS for your playback device

			*/
			audioContext = new AudioContext();

			/*  assign to gumStream for later use  */
			gumStream = stream;

			/* use the stream */
			input = audioContext.createMediaStreamSource(stream);

		/* 
			Create the Recorder object and configure to record mono sound (1 channel)
			Recording 2 channels  will double the file size
			*/
			rec = new Recorder(input,{numChannels:1})

		//start the recording process
		rec.record()

		console.log("Recording started");

	}).catch(function(err) {
		console.log(err);
	  	//enable the record button if getUserMedia() fails
	  });
}

function pauseRecording(){
	console.log("pauseButton clicked rec.recording=",rec.recording );
	if (rec.recording){
		//pause
		rec.stop();
		// pauseButton.innerHTML="Resume";
	}else{
		//resume
		rec.record()
		// pauseButton.innerHTML="Pause";

	}
}

function launch_toast(msj) {
    var x = document.getElementById("toast")
    x.className = "show";
    document.getElementById("desc").innerHTML = msj;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function stopRecording() {
	console.log("stopButton clicked");

	document.getElementById('btnstartRecord').style.display = "block"
	document.getElementById('btnstopRecord').style.display = "none"

	
	//tell the recorder to stop the recording
	rec.stop();

	//stop microphone access
	gumStream.getAudioTracks()[0].stop();

	//create the wav blob and pass it on to createDownloadLink
	rec.exportWAV(createDownloadLink);
}

function createDownloadLink(blob) {
	console.log(blob)
	var url = URL.createObjectURL(blob);
	var au = document.createElement('audio');
	var li = document.createElement('li');
	var link = document.createElement('a');

	//name of .wav file to use during upload and download (without extendion)
	var filename = _words._data[index].txt + Math.floor(new Date().valueOf() + Math.random()) + ".wav"

	//add controls to the <audio> element
	au.controls = true;
	au.src = url;

	//save to disk link
	link.href = url;
	link.download = filename+".wav"; //download forces the browser to donwload the file using the  filename
	link.innerHTML = "Save to disk";

    //add the new audio element to li
    li.appendChild(au);

    if (index < (_words._data.length)){	
    	dataRecords[index] = {
    		'folder': _words._data[index].txt,
    		'data': blob,
    		'name': filename
    	};

    	addAudioControler(url, index);		
    }


    if (index < (_words._data.length)){
    	index++;
    }
    if (index == _words._data.length){
    	document.getElementById('btnstartRecord').disabled = true;
    	document.getElementById('contEnviar').classList.remove('disabled');
    }else{

    	document.getElementById('contador').innerHTML = `<span class="text"><b>${index+1}/ a ${_words._data.length}</b> palabras</span>`;
    }

	// //add the filename to the li
	// li.appendChild(document.createTextNode(filename+".wav "))

	// //add the save to disk link to li
	// li.appendChild(link);
	
	// //upload link
	// var upload = document.createElement('a');
	// upload.href="#";
	// upload.innerHTML = "Upload";
	// upload.addEventListener("click", function(event){
	// 	  var xhr=new XMLHttpRequest();
	// 	  xhr.onload=function(e) {
	// 	      if(this.readyState === 4) {
	// 	          console.log("Server returned: ",e.target.responseText);
	// 	      }
	// 	  };
	// 	  var fd=new FormData();
	// 	  fd.append("audio_data",blob, filename);
	// 	  xhr.open("POST","upload.php",true);
    //       xhr.send(fd);
	// })
	// li.appendChild(document.createTextNode (" "))//add a space in between
	// li.appendChild(upload)//add the upload link to li

	// //add the li element to the ol
	// recordingsList.appendChild(li);
}

function addAudioControler(url, index) {
	let percent = (index + 1) * 130;        
	document.querySelectorAll('.card-dimensions')[index].style = `transform: scale(1) translateX(${percent}%); opacity: 0;`;
	document.querySelectorAll('.card-dimensions')[index+1].style = `transform: scale(1) translateX(0%); opacity: 1;`;
	

	objAudio[index].url = url;
	var idElement = document.getElementById(objAudio[index].idElement);
	
	var content = "<div class='' data-tooltipped='' aria-describedby='tippy-tooltip-1' " +
	" data-original-title='Heaven forbid!' style='display: inline;'><button " +
	" class='play' type='button' value='"+ objAudio[index].url +"' onclick='playRecoder(this)'><span class='padder'><svg width='24' " +
	" height='24' viewBox='0 0 24 24'> " +
	" <defs> " +
	" <path id='play-outline-path50' d='M15.5 9.173L1.5.15c-.3-.2-.7-.2-1 0-.3.1-.5.401-.5.802v18.045c0 .401.2.702.5.903.2.1.3.1.5.1s.4-.1.5-.2l14-9.023c.3-.2.5-.501.5-.802 0-.3-.2-.702-.5-.802zM2 17.193V2.757l11.2 7.218L2 17.193z'></path> " +
	"</defs> " +
	" <g fill='none' fill-rule='evenodd' transform='translate(4 2)'> " +
	" <mask id='play-outline-mask50' fill='#fff'> " +
	" <use xlink:href='#play-outline-path50'></use> " +
	" </mask> " +
	" <g fill='#4A4A4A' mask='url(#play-outline-mask50)'> " +
	" <path d='M-4-1h24v24H-4z'></path> " +
	" </g>" +
	" </g>" +
	" </svg></span></button> " +
	" </div>" +

	"<div class='' data-tooltipped='' aria-describedby='tippy-tooltip-12'" +
	"data-original-title='Review &amp; re-record clips here as you go' style='display: inline;'><button"+
	"class='redo' type='button' onclick='redo(this)' data-itemid="+ index +"><span class='padder'><svg width='24'"+
	"height='24' viewBox='0 0 24 24'>"+
	"<defs>"+
	"<path id='redo-path51' d='M15.171 19.399c-1.105.4-2.21.601-3.315.601-4.12 0-8.038-2.604-9.445-6.711-.2-.501.1-1.102.603-1.302.502-.2 1.105.1 1.306.6 1.507 4.208 6.029 6.411 10.248 4.909 4.22-1.503 6.43-6.01 4.923-10.217-.703-2.003-2.21-3.606-4.119-4.608-1.909-.901-4.12-1.001-6.129-.3-1.105.4-2.21 1.001-3.014 1.903L3.316 6.978h3.516c.603 0 1.005.401 1.005 1.002s-.402 1.002-1.005 1.002H.603h-.1l-.101-.1c-.1 0-.1-.1-.201-.1 0 0 0-.1-.1-.1C.1 8.58 0 8.58 0 8.48v-.2-6.31C0 1.368.402.967 1.005.967c.603 0 1.004.401 1.004 1.002v3.706l3.015-2.804C6.028 1.87 7.334 1.069 8.74.568c2.512-.902 5.224-.701 7.636.4 2.411 1.202 4.22 3.206 5.124 5.71 1.708 5.209-1.105 10.918-6.33 12.721z'></path>"+
	"</defs>"+
	"<g fill='none' fill-rule='evenodd' transform='translate(1 2)'>"+
	"<mask id='redo-mask51' fill='#fff'>"+
	"<use xlink:href='#redo-path51'></use>"+
	"</mask>"+
	"<g fill='#4A4A4A' mask='url(#redo-mask51)'>"+
	"<path d='M-1-2h24v24H-1z'></path>"+
	"</g>"+
	"</g>"+
	"</svg></span></button>"+
	"</div>"+		

	"</div>";

	idElement.innerHTML = content;

	
}

function playRecoder(comp) {
	var url = comp.value;
	var myaudio = new Audio(url);
	console.log(url)

	myaudio.play();
}

function redo(item){
	let percent = (index + 1) * -130;
	document.querySelectorAll('.card-dimensions')[index].style = `transform: scale(1) translateX(${percent}%); opacity: 0;`;
	index = parseInt(item.dataset.itemid);
	document.querySelectorAll('.card-dimensions')[index].style = `transform: scale(1) translateX(0%); opacity: 1;`;
	startRecording();
}

function sendData(){

	launch_toast("Subiendo audios, ¡espere porfavor!");
	// set it up
	firebase.storage().ref().constructor.prototype.putFiles = function(files) { 
		var ref = this;
		return Promise.all(files.map(function(file) {
			console.log("Uploading ", file.name);
			return ref.child("voices/"+ file.folder + "/"+ file.name).put(file.data);
		}));
	}

	firebase.storage().ref().putFiles(dataRecords).then(function(metadatas) {
		// Get an array of file metadata
		console.log("Subido: ", metadatas);
		launch_toast("Todos los archivos han sido subidos");
	}).catch(function(error) {
		console.log(error);
		// If any task fails, handle this
	});

}