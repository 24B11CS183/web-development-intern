const products = [
  { name: "Laptop", category: "electronics", rating: 5 },
  { name: "Shirt", category: "clothing", rating: 4 },
  { name: "Phone", category: "electronics", rating: 3 },
  { name: "Jeans", category: "clothing", rating: 5 }
];

function displayProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${p.name}</h3><p>Category: ${p.category}</p><p>Rating: ⭐ ${p.rating}</p>`;
    grid.appendChild(card);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const option = document.getElementById("sortOption").value;
  const sorted = [...products].sort((a, b) => option === "name" ? a.name.localeCompare(b.name) : b.rating - a.rating);
  displayProducts(sorted);
}

window.onload = () => displayProducts(products);
