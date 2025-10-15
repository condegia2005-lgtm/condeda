// Hiệu ứng bong bóng dê PNG 🐐
const bubblesContainer = document.querySelector('.bubbles');

for (let i = 0; i < 25; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Tạo ảnh dê bong bóng
  const goat = document.createElement('img');
  goat.src = 'DALL_E_2025-02-11_20.01.18_-_A_chibi-style_goat_wearing_black_sunglasses__pointing_in_one_direction_with_one_hoof_while_holding_a_Sheriff_revolver_from_Valorant_in_the_other_hoof-removebg-preview.png';
  goat.alt = 'Goat bubble';
  goat.classList.add('goat-icon');

  const size = Math.random() * 40 + 20;
  goat.style.width = `${size}px`;
  goat.style.height = `${size}px`;

  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${8 + Math.random() * 10}s`;
  bubble.style.animationDelay = `${Math.random() * 5}s`;
  bubble.style.opacity = 0.6 + Math.random() * 0.4;

  bubble.appendChild(goat);
  bubblesContainer.appendChild(bubble);
}

