 var source = "sound/battle.ogg"
 var audio = document.createElement("audio");
 //

function playaudio(){ 
 audio.autoplay = true;
 //
 audio.load()
 audio.addEventListener("load", function() { 
     audio.play(); 
 }, true);
 audio.src = source;
}
