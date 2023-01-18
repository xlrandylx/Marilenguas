let sound = false
let audio           = document.createElement('audio');

function Sonido(){
    if (sound) {
        audio.pause()
        document.getElementById('IconMusic1').src = "./images/icon_sound.png"
    }else{
        audio.loop      =true;
            audio.volume        = 0.3
            audio.autoplay      =true;
            audio.src           = "./sounds/Miranda-Perfecta.flac"
            audio.play()
            document.getElementById('IconMusic1').src = "./images/icon_sound.png"
        }
        sound = !sound
}