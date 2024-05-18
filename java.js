const audio = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause-button');
const playIcon = document.getElementById('play-music');
const pauseIcon = document.getElementById('pause-music');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
  } else {
    audio.pause();
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  }
});

