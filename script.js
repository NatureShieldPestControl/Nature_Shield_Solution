// 🌿 Floating Animation (optional decorative)
let x = 0;
let dir = 1;

function animateImage() {
  const img = document.getElementById("moveImage");
  if (!img) return;
  x += dir * 0.4;
  if (x > 30 || x < -30) dir *= -1;
  img.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animateImage);
}
animateImage();

// 🟩 ORDER MODAL LOGIC
const orderModal = document.getElementById('orderModal');
const openOrderBtn = document.getElementById('openOrderModal');
const closeOrderModalBtn = document.getElementById('closeOrderModal');

if (openOrderBtn && orderModal && closeOrderModalBtn) {
  // open modal
  openOrderBtn.addEventListener('click', () => {
    orderModal.classList.remove('hidden');
  });

  // close via X button
  closeOrderModalBtn.addEventListener('click', () => {
    orderModal.classList.add('hidden');
  });

  // close when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === orderModal) {
      orderModal.classList.add('hidden');
    }
  });
}

// 🪴 PRODUCT DETAILS MODAL (if may product.js)
const productModal = document.getElementById('productModal');
const closeProductModal = document.getElementById('closeProductModal');

if (productModal && closeProductModal) {
  closeProductModal.addEventListener('click', () => {
    productModal.classList.add('hidden');
  });
}

// 🌄 Background Image Slideshow
const images = [
  'assets/product1.jpg',
  'assets/product2.jpg',
  'assets/product3.jpg'
];

let index = 0;
const homeSection = document.getElementById('home');
homeSection.style.transition = 'background-image 2s ease-in-out';

setInterval(() => {
  index = (index + 1) % images.length;
  homeSection.style.backgroundImage = `url('${images[index]}')`;
}, 3000);
