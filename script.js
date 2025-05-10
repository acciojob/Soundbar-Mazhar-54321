//your JS code here. If required.
function playSound(soundName) {
   const existing = document.getElementById('dynamic-audio');
    if (existing) existing.remove();
    const audio = document.createElement('audio');
    audio.id = 'dynamic-audio';
    audio.src = `sounds/${soundName}.mp3`;
    audio.autoplay = true;
    document.body.appendChild(audio);

    window.currentAudio = audio;
}

function stopSounds() {
    if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio.currentTime = 0;
    }
}
