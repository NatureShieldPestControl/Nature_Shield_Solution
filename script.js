// 🌿 FLOATING IMAGE ANIMATION (decorative movement)
(function floatingImage() {
  const img = document.getElementById("moveImage");
  if (!img) return;

  let x = 0, dir = 1;

  function animate() {
    x += dir * 0.4;
    if (x > 30 || x < -30) dir *= -1;
    img.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animate);
  }
  animate();
})();


// 🟩 ORDER MODAL LOGIC
(function setupOrderModal() {
  const orderModal = document.getElementById('orderModal');
  const openOrderBtn = document.getElementById('openOrderModal');
  const closeOrderModalBtn = document.getElementById('closeOrderModal');

  if (!orderModal || !openOrderBtn || !closeOrderModalBtn) return;

  openOrderBtn.addEventListener('click', () => orderModal.classList.remove('hidden'));
  closeOrderModalBtn.addEventListener('click', () => orderModal.classList.add('hidden'));

  window.addEventListener('click', (e) => {
    if (e.target === orderModal) orderModal.classList.add('hidden');
  });
})();


// 🟩 PRODUCT MODAL LOGIC
(function setupProductModal() {
  const productModal = document.getElementById('productModal');
  const closeProductModal = document.getElementById('closeProductModal');
  if (!productModal || !closeProductModal) return;

  closeProductModal.addEventListener('click', () => productModal.classList.add('hidden'));
})();


// 🖼️ FEEDBACK MULTI-SLIDESHOW (3-4-3 layout with fly-in transition)
(function feedbackMultiSlideshow() {
  const slideshows = [
    { id: "slideshow1", range: [0, 3] },  
    { id: "slideshow2", range: [3, 7] },  
    { id: "slideshow3", range: [7, 10] }  
  ];

  const feedbackImages = [
    "assets/customer2.jpg",
    "assets/customer3.jpg",
    "assets/customer4.jpg",
    "assets/customer5.jpg",
    "assets/customer6.jpg",
    "assets/customer7.jpg",
    "assets/customer8.jpg",
    "assets/customer9.jpg",
    "assets/customer10.jpg"
  ];

  slideshows.forEach(({ id, range }) => {
    const container = document.getElementById(id);
    if (!container) return;

    const subset = feedbackImages.slice(range[0], range[1]);
    let index = 0;

    // Generate <img> elements
    subset.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.style.left = i === 0 ? "0%" : "100%";
      img.classList.toggle("active", i === 0);
      container.appendChild(img);
    });

    const images = container.querySelectorAll("img");

    // 🔁 Auto-slide effect
    setInterval(() => {
      const current = images[index];
      const nextIndex = (index + 1) % images.length;
      const next = images[nextIndex];

      // Animate out current image (to left)
      current.style.left = "-100%";
      current.style.opacity = "0";

      // Animate in next image (from right)
      next.style.left = "0";
      next.style.opacity = "1";

      // Reset current image after animation
      setTimeout(() => {
        current.style.transition = "none";
        current.style.left = "100%";  // balik sa kanan (ready for next loop)
        current.style.opacity = "0";

        // re-enable transition
        setTimeout(() => {
          current.style.transition = "all 1s ease-in-out";
        }, 50);
      }, 1000);

      index = nextIndex;
    }, 3500);
  });
})();




// 🌿 HOMEPAGE BACKGROUND SLIDER
(function backgroundSlider() {
  const homeSection = document.getElementById('home');
  if (!homeSection) return;

  const bgImages = [
    'assets/product1.jpg',
    'assets/product2.jpg',
    'assets/product3.jpg'
  ];

  let currentIndex = 0;
  homeSection.style.transition = 'background-image 2s ease-in-out';

  setInterval(() => {
    currentIndex = (currentIndex + 1) % bgImages.length;
    homeSection.style.backgroundImage = `url('${bgImages[currentIndex]}')`;
  }, 4000);
})();
