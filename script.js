const playBtn = document.getElementById('play-music-btn');
const audio = document.getElementById('bg-music');

playBtn.addEventListener('click', () => {
  audio.currentTime = 113; // começa a tocar a partir de 1m53s
  audio.play();
  // playBtn.style.display = 'none'; // oculta o botão após tocar
});
let index = 1;
const caroussel = document.getElementById('caroussel');
const totalSlides = caroussel.querySelectorAll('input[type="radio"]').length;

setInterval(() => {
  const slide = document.getElementById('slide' + index);
  if (slide) {
    slide.checked = true;
  }
  index++;
  if (index > totalSlides) index = 1;
}, 4000);
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💙';
  heart.style.left = `calc(${Math.random() * 100}vw - 2rem)`; 
  heart.style.animationDuration = 2 + Math.random() * 3 + 's'; // 2s a 5s

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 100);
