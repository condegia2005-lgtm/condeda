// Hiệu ứng bong bóng dê PNG 🐐
const bubblesContainer = document.querySelector('.bubbles');

for (let i = 0; i < 25; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // tạo ảnh dê PNG
  const goat = document.createElement('img');
  goat.src = './assets/DALL·E 2025-02-11 19.58.03 - A chibi-style goat wearing black sunglasses, pointing in one direction with one hoof. The goat has large expressive eyes behind the sunglasses, a smal.webp'; // 🐐 ảnh con dê của bạn
  goat.classList.add('DALL·E 2025-02-11 19.58.03 - A chibi-style goat wearing black sunglasses, pointing in one direction with one hoof. The goat has large expressive eyes behind the sunglasses, a smal.webp');

  const size = Math.random() * 40 + 20; // kích thước ngẫu nhiên
  goat.style.width = `${size}px`;
  goat.style.height = `${size}px`;

  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${8 + Math.random() * 10}s`;
  bubble.style.animationDelay = `${Math.random() * 5}s`;
  bubble.style.opacity = 0.6 + Math.random() * 0.4;

  bubble.appendChild(goat);
  bubblesContainer.appendChild(bubble);
}





