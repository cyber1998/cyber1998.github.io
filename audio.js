function playAudio(audio, audioElement) {
    // change audio icon to muted
    audioElement.innerHTML = '<i class="fas fa-volume-up"></i>';
    audio.volume = 0.2;
    audio.loop = true;
    audio.play();
}

function pauseAudio(audio, audioElement) {
    audio.pause();
    // change audio icon to play
    audioElement.innerHTML = '<i class="fas fa-volume-mute"></i>';
}

function toggleAudio(audio, audioElement) {
  if (audio.paused) {
    playAudio(audio, audioElement);
  } else {
    pauseAudio(audio, audioElement);
  }
}

audio = new Audio('bg-music.wav');
audioElement = document.getElementById('play');
audioElement.addEventListener('click', () => {
  toggleAudio(audio, audioElement);
});
