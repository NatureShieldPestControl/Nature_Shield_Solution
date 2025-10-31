// 🧴 Shared Product Description for All Cards
const productDescription = `
Nature Shield Pest Control is a handmade organic pesticide carefully formulated from natural and locally sourced ingredients. It is made using fish gills, which serve as the base for fish amino acid that nourishes plants and helps them grow stronger. Molasses is added as a natural fermenting agent and preservative, ensuring the mixture stays effective over time. To complete the formula, madre cacao leaves are included for their powerful pest-repelling and antibacterial properties.

Through a natural fermentation process, these ingredients work together to create a safe, effective, and eco-friendly solution that protects plants from common pests such as aphids, caterpillars, and mites. Unlike chemical pesticides, Nature Shield is gentle on plants, safe for humans and friendly to the environment.

Each bottle is carefully prepared, filtered, and packaged by hand to maintain high quality and consistency. With regular use, Nature Shield not only keeps your plants pest-free but also helps them grow healthier and more vibrant  naturally.
`;

const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".view-details-btn, .product-card").forEach((btn) => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = "Product Description";
    modalDesc.innerHTML = productDescription.replace(/\n/g, "<br>");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});
