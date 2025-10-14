// Hiệu ứng bong bóng dê nhỏ (emoji 🐐)
const bubblesContainer = document.querySelector('.bubbles');

for (let i = 0; i < 25; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // tạo emoji dê
  const goat = document.createElement('span');
  goat.textContent = '🐐';
  
  const size = Math.random() * 40 + 20; // kích thước ngẫu nhiên
  goat.style.fontSize = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${8 + Math.random() * 10}s`;
  bubble.style.animationDelay = `${Math.random() * 5}s`;
  bubble.style.opacity = 0.5 + Math.random() * 0.5;

  bubble.appendChild(goat);
  bubblesContainer.appendChild(bubble);
}
