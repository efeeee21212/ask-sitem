// 💖 Hareketli Kalpler
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  heart.innerText = "❤️";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 400);

//

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  heart.innerText = "💗";
  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);


// Kalp oluşturma fonksiyonu
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  document.body.appendChild(heart);

  // Kalbi belirli süre sonra kaldır
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Her 200ms'de bir kalp oluştur
setInterval(createHeart, 200);
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  heart.style.width = heart.style.height = (20 + Math.random() * 30) + 'px';
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Her 300 ms'de yeni kalp oluştur
setInterval(createHeart, 300);
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  heart.style.width = heart.style.height = (20 + Math.random() * 30) + 'px';
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Her 300 ms'de yeni kalp oluştur
setInterval(createHeart, 300);
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  heart.style.width = heart.style.height = (20 + Math.random() * 30) + 'px';
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Her 300 ms'de yeni kalp oluştur
setInterval(createHeart, 300);
function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Rastgele başlangıç pozisyonu (yatay)
  heart.style.left = randomRange(0, window.innerWidth) + 'px';

  // Rastgele boyut
  const size = randomRange(10, 30);
  heart.style.width = size + 'px';
  heart.style.height = (size * 0.9) + 'px';

  // Başlangıç opaklığı
  heart.style.opacity = randomRange(0.5, 1);

  document.body.appendChild(heart);

  // Animasyon süreleri ve hareket
  const duration = randomRange(4000, 8000);
  const moveX = randomRange(-100, 100); // yatayda hafif sağa sola

  // Animasyon
  heart.animate([
    { transform: 'translate(0, 0) scale(1)', opacity: heart.style.opacity },
    { transform: `translate(${moveX}px, -${window.innerHeight + 100}px) scale(1.2)`, opacity: 0 }
  ], {
    duration: duration,
    easing: 'ease-out',
    fill: 'forwards'
  });

  // Animasyon bitince kalbi kaldır
  setTimeout(() => {
    heart.remove();
  }, duration);
}

// Her 200 ms'de yeni kalp oluştur
setInterval(createHeart, 200);
const btn = document.getElementById('surprise-btn');
const surpriseText = document.getElementById('surprise-text');

btn.addEventListener('click', () => {
  surpriseText.classList.toggle('show');
});
document.getElementById('surpriseBox').addEventListener('click', function() {
  this.classList.toggle('open');
});
const box = document.getElementById('surpriseBox');

box.addEventListener('click', () => {
  box.classList.toggle('open');
});
