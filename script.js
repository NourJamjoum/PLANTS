let cart = JSON.parse(localStorage.getItem("cart")) || [];

function toggleMenu() {
  document.querySelector("nav").classList.toggle("open");
}

function showDetails(name, price, info) {
  document.getElementById("modalTitle").innerText = name;
  document.getElementById("modalInfo").innerText = info;
  document.getElementById("modalPrice").innerText = price + " ₪";
  document.getElementById("addBtn").onclick = () => addToCart(name, price);
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("הצמח נוסף לסל 🌿");
  closeModal();
}
