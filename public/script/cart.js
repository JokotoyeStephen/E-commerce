// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    updateTotals();
    return;
  }

  cart.forEach((item, index) => {
    cartContainer.innerHTML += `
      <div class="flex justify-between items-center border-b py-4">
        <div>
          <h4 class="font-semibold">${item.name}</h4>
          <p class="text-sm text-gray-500">₦${item.price}</p>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="decreaseQty(${index})"
            class="px-2 bg-gray-200 rounded">-</button>

          <span>${item.quantity}</span>

          <button onclick="increaseQty(${index})"
            class="px-2 bg-gray-200 rounded">+</button>
        </div>

        <div>
          <p class="font-semibold">
            ₦${item.price * item.quantity}
          </p>
          <button onclick="removeItem(${index})"
            class="text-red-500 text-sm">Remove</button>
        </div>
      </div>
    `;
  });

  updateTotals();
}

function increaseQty(index) {
  cart[index].quantity++;
  saveCart();
  renderCart();
}

function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  }
  saveCart();
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function updateTotals() {
  let subtotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  let shipping = 2000;
  let total = subtotal + shipping;

  subtotalElement.textContent = "₦" + subtotal;
  totalElement.textContent = "₦" + total;
}

renderCart();