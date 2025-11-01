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

  openOrderBtn.addEventListener('click', () => {
    orderModal.classList.remove('hidden');
  });

  closeOrderModalBtn.addEventListener('click', () => {
    orderModal.classList.add('hidden');
  });


  window.addEventListener('click', (e) => {
    if (e.target === orderModal) {
      orderModal.classList.add('hidden');
    }
  });
}


const productModal = document.getElementById('productModal');
const closeProductModal = document.getElementById('closeProductModal');

if (productModal && closeProductModal) {
  closeProductModal.addEventListener('click', () => {
    productModal.classList.add('hidden');
  });
}


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
