//5a  Viktoriia Mikhailova
//musik player
const songList= "Alan Walker - Fade.mp3";
const audioPlayer=document.getElementById('audio-player');
audioPlayer.src="audio/"+songList;

function toggleSound(){
	if(audioPlayer.paused){
		audioPlayer.play()
	}
	else{
		audioPlayer.pause();
	}
}