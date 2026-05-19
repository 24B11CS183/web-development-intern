// Cart functionality
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
}

function displayCart() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").textContent = `Total: $${total}`;
}

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
  e.target.reset();
});

// Product filter functionality
const filterButtons = document.querySelectorAll(".filter-bar button");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.textContent;
    filterProducts(category);
  });
});

function filterProducts(category) {
  const cards = document.querySelectorAll(".grid .card");

  cards.forEach(card => {
    const productName = card.querySelector("h3").textContent.toLowerCase();

    if (category === "All") {
      card.style.display = "block";
    } else if (category === "Electronics" && 
               (productName.includes("headphones") || productName.includes("watch"))) {
      card.style.display = "block";
    } else if (category === "Accessories" && productName.includes("mouse")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
