//your JS code here. If required.
function playSound(soundName) {
    stopSounds(); // Stop any currently playing sounds
    const audio = new Audio(`sounds/${soundName}.mp3`);
	console.log(audio)
    audio.play();
    window.currentAudio = audio;
}

function stopSounds() {
    if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio.currentTime = 0;
    }
}
