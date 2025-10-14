// Hiệu ứng dê bay ngẫu nhiên
const bubblesContainer = document.querySelector('.bubbles');

for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const img = document.createElement('img');

  // Đường dẫn tương đối ổn định trên GitHub Pages
  img.src = '🐐';  

  img.alt = "goat bubble";
  bubble.appendChild(img);

  // Tạo kích thước và hiệu ứng ngẫu nhiên
  const size = Math.random() * 30 + 20;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${6 + Math.random() * 10}s`;
  bubble.style.opacity = 0.6 + Math.random() * 0.4;

  bubblesContainer.appendChild(bubble);
}


