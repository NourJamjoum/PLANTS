let cart = JSON.parse(localStorage.getItem("cart")) || [];

function toggleMenu() {
  document.querySelector("nav").classList.toggle("open");
}

// פונקציה להציג פרטי צמח במודאל
function showDetails(name, price, info) {
  document.getElementById('modalTitle').innerText = name;
  document.getElementById('modalInfo').innerText = info;
  document.getElementById('modalPrice').innerText = price + " ₪";
  document.getElementById('modal').style.display = 'block';
}

// פונקציה לסגירת המודאל
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("הצמח נוסף לסל 🌿");
  closeModal();
}

// פונקציה לחיפוש צמחים
function searchPlants() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const plantName = card.querySelector('h3').innerText.toLowerCase();
    if (plantName.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
