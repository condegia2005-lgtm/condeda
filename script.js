// Hiệu ứng dê bay ngẫu nhiên
const bubblesContainer = document.querySelector('.bubbles');

for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const img = document.createElement('img');
  img.src = 'file:///C:/Users/ADMIN/.vscode/Nhong%20tap%20code/DALL_E_2025-02-11_20.01.18_-_A_chibi-style_goat_wearing_black_sunglasses__pointing_in_one_direction_with_one_hoof_while_holding_a_Sheriff_revolver_from_Valorant_in_the_other_hoof-removebg-preview.png'; // icon con dê
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
