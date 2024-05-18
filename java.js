
const audio = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause-button');
const playIcon = document.getElementById('play-music');
const pauseIcon = document.getElementById('pause-music');

// Adiciona um evento de clique ao botão de reprodução
playPauseButton.addEventListener('click', () => {
  // Verifica se o áudio está pausado
  if (audio.paused) {
    // Reproduz o áudio
    audio.play();
    // Altera os ícones de reprodução/pausa
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
  } else {
    // Pausa o áudio
    audio.pause();
    // Altera os ícones de reprodução/pausa
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  }
});

