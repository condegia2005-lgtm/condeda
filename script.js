// Hiệu ứng dê bay ngẫu nhiên
const bubblesContainer = document.querySelector('.bubbles');

for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const img = document.createElement('img');
  img.src = 'DALL·E 2025-02-11 19.58.03 - A chibi-style goat wearing black sunglasses, pointing in one direction with one hoof. The goat has large expressive eyes behind the sunglasses, a smal.webp'; // icon con dê
  bubble.appendChild(img);

  // Random vị trí, kích thước, tốc độ
  const size = Math.random() * 30 + 20;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${6 + Math.random() * 10}s`;
  bubble.style.opacity = 0.6 + Math.random() * 0.4;

  bubblesContainer.appendChild(bubble);
}


