const playBtn = document.getElementById('play-music-btn');
const audio = document.getElementById('bg-music');

playBtn.addEventListener('click', () => {
  audio.currentTime = 113; // começa a tocar a partir de 1m53s
  audio.play();
  // playBtn.style.display = 'none'; // oculta o botão após tocar
});
