// ===== Kata Kara Shared JS =====
const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    price: 1200000,
    old: 1350000,
    image: "../images/iphone 16.png",
    cat: "electronics",
    badge: "hot",
    rating: 4.9,
    reviews: 312,
    seller: "TechZone Lagos",
  },
  {
    id: 2,
    name: "Nike Air Max 270",
    price: 18200,
    old: null,
    image: "../images/adidas.png",
    cat: "fashion",
    badge: "new",
    rating: 4.7,
    reviews: 88,
    seller: "SneakerHub Abuja",
  },
  {
    id: 3,
    name: 'Samsung 55" QLED TV',
    price: 480000,
    old: 520000,
    image: "../images/samsungTV.png",
    cat: "electronics",
    badge: "sale",
    rating: 4.8,
    reviews: 204,
    seller: "ElectroPro PH",
  },
  {
    id: 4,
    name: "Ankara Midi Dress",
    price: 18500,
    old: null,
    image: "../images/dress.png",
    cat: "fashion",
    badge: "new",
    rating: 4.6,
    reviews: 67,
    seller: "AsoEbi Store",
  },
  {
    id: 5,
    name: "Ninja Air Fryer 6L",
    price: 42000,
    old: 50000,
    image: "../images/ninjaa.png",
    cat: "home",
    badge: "sale",
    rating: 4.8,
    reviews: 155,
    seller: "KitchenKing Lagos",
  },
  {
    id: 6,
    name: "PlayStation 5",
    price: 550000,
    old: null,
    image: "../images/station.png",
    cat: "electronics",
    badge: "hot",
    rating: 4.9,
    reviews: 491,
    seller: "GamersHub NG",
  },
  {
    id: 7,
    name: "Dyson V12 Vacuum",
    price: 320000,
    old: null,
    image: "../images/ei_1777631600508-removebg-preview.png",
    cat: "home",
    badge: "new",
    rating: 4.9,
    reviews: 78,
    seller: "HomeElite",
  },
  {
    id: 8,
    name: "Canon EOS R50",
    price: 780000,
    old: 900000,
    image: "../images/camara.png",
    cat: "camera",
    badge: "sale",
    rating: 4.8,
    reviews: 132,
    seller: "PhotoPro NG",
  },
  {
    id: 12,
    name: "Earpod Pro",
    price: 10000,
    old: null,
    image: "../images/Premium wireless earbuds with 40-hour battery….jpg",
    cat: "electronics",
    badge: "new",
    rating: 4.6,
    reviews: 95,
    seller: "stephens store",
  },
  {
    id: 9,
    name: "Iphone 17",
    price: 1335000,
    old: 1345000,
    image:"../images/ei_1777631658026-removebg-preview.png",
    cat: "electronics",
    badge: "sale",
    rating: 4.5,
    reviews: 44,
    seller: "stephens store",
  },
  {
    id: 10,
    name: "PlayStation 5",
    price: 650000,
    old: null,
    image:
     "../images/ei_1777631682740-removebg-preview.png",
    cat: "electronics",
    badge: "hot",
    rating: 4.8,
    reviews: 691,
    seller: "GamersHub NG",
  },
  {
    id: 11,
    name: "Face Serum Set",
    price: 25000,
    old: null,
    image: "../images/ei_1777632411071-removebg-preview.PNG",
    cat: "beauty",
    badge: "sale",
    rating: 4.7,
    reviews: 110,
    seller: "GlowHub",
  },
  
  {
    id: 13,
    name: "sofa Pro",
    price: 125000,
    old: null,
    image: "../images/ei_1777632545962-removebg-preview.png",
    cat: "furniture",
    badge: "sale",
    rating: 4.6,
    reviews: 55,
    seller: "sofaMaga NG",
  },
  {
    id: 14,
    name: "Ankara lady's dress",
    price: 65000,
    old: null,
    image: "../images/ei_1777631476885-removebg-preview.png",
     cat: "fashion",
    badge: "hot",
    rating: 4.6,
    reviews: 67,
    seller: "Sharon Tailor",
  },
  {
    id: 15,
    name: "Face makeup Set",
    price: 10000,
    old: null,
    image: "../images/47fb8976bbdfb0d65ab38604c70f37ea.jpg",
    cat: "beauty",
    badge: "sale",
    rating: 4.7,
    reviews: 110,
    seller: "GlowHub",
  },
  {
    id: 16,
    name: "soafa long Chair",
    price: 95000,
    old: null, 
    image: "../images/ei_1777632612374-removebg-preview.png",
    cat: "furniture",
    badge: "hot",
    rating: 4.6,
    reviews: 55,
    seller: "OfficeMax NG",
  },
    {
    id: 17,
    name: "Dyson V10 Vacuum",
    price: 300000,
    old: null,
    image: "../images/ei_1777631625548-removebg-preview.png",
    cat: "home",
    badge: "new",
    rating: 4.9,
    reviews: 78,
    seller: "HouseholdElite",
  },
   {
    id: 18,
    name: "Sharp Camera E60",
    price: 1200000,
    old: null,
    image: "../images/ei_1777632694115-removebg-preview.PNG",
    cat: "camera",
    badge: "sale",
    rating: 4.7,
    reviews: 710,
    seller: "camera pro",
  },
  
  {
    id: 19,
    name: "sofa Pro",
    price: 325000,
    old: null,
    image: "../images/ei_1777632577294-removebg-preview.png",
    cat: "furniture",
    badge: "hot",
    rating: 4.6,
    reviews: 55,
    seller: "chair.com NG",
  },
  {
    id: 20,
    name: "Vedio camera",
    price:1455000,
    old: null,
    image: "../images/ei_1777632763772-removebg-preview.png",
     cat: "camera",
    badge: "new",
    rating: 4.6,
    reviews: 67,
    seller: "Sharon Tailor",
  },
  {
    id: 21,
    name: "Artifical Finger nail Set",
    price: 200000,
    old: null,
    image: "../images/d2be5c92251717c78d8304b791fe72f0.jpg",
    cat: "beauty",
    badge: "sale",
    rating: 4.7,
    reviews: 110,
    seller: "GlowHub",
  },
  {
    id: 22,
    name: "Drone camera",
    price: 1500000,
    old: null, 
    image: "../images/ei_1777632867540-removebg-preview.png",
    cat: "camera",
    badge: "hot",
    rating: 4.6,
    reviews: 55,
    seller: "OfficeMax NG",
  },
    {
    id: 23,
    name: "Wall minor",
    price: 30000,
    old: null,
    image: "../images/ei_1777632447208-removebg-preview.png",
    cat: "home",
    badge: "new",
    rating: 4.9,
    reviews: 78,
    seller: "HouseholdElite",
  },
  
  {
    id: 24,
    name: "suite",
    price: 75000,
    old: null,
    image: "../images/ei_1777632296326-removebg-preview.png",
   cat: "fashion",
    badge: "hot",
    rating: 4.7,
    reviews: 210,
    seller: "ultimate",
  },
  {
    id: 25,
    name: "Up and Down complete Set",
    price: 200000,
    old: null,
    image: "../images/ei_1777632337815-removebg-preview.png",
    cat: "fashion",
    badge: "sale",
    rating: 4.7,
    reviews: 210,
    seller: "ultimate",
  },
  {
    id: 26,
    name: "camera with short trypod",
    price: 1200000,
    old: null, 
    image: "../images/ei_1777632789593-removebg-preview.png",
    cat: "camera",
    badge: "hot",
    rating: 4.6,
    reviews: 55,
    seller: "Cam shot NG",
  },
    {
    id: 27,
    name: "HP laptop",
    price: 1500000,
    old: null,
    image: "../images/ei_1777631527969-removebg-preview.png",
    cat: "electronics",
    badge: "new",
    rating: 4.9,
    reviews: 78,
    seller: "computer village",
  },

     {
    id: 28,
    name: "microphone",
    price: 200000,
    old: null,
    image: "../images/Red Dot Design Award.jpg",
    cat: "electonics",
    badge: "sale",
    rating: 4.7,
    reviews: 710,
    seller: "computer village",
  },
  
  {
    id: 29,
    name: "bed",
    price: 80000,
    old: null,
    image: "../images/ei_1777632493922-removebg-preview.png",
    cat: "furniture",
    badge: "hot",
    rating: 4.6,
    reviews: 55,
    seller: "chair.com NG",
  },
  {
    id: 30,
    name: "smart camera",
    price:1455000,
    old: 2000000,
    image: "../images/ei_1777632827535-removebg-preview.png",
     cat: "camera",
    badge: "new",
    rating: 4.6,
    reviews: 67,
    seller: "cam stores",
  },
   {
    id: 31,
    name: "man's wear",
    price: 120000,
    old: 135000,
    image: "../images/ei_1777632383811-removebg-preview.png",
    cat: "fashion",
    badge: "hot",
    rating: 4.9,
    reviews: 312,
    seller: "classic store Lagos",
  },
  {
    id: 32,
    name: "Adidas",
    price: 40000,
    old: 55000,
    image: "../images/ei_1777558924764-removebg-preview.png",
    cat: "fashion",
    badge: "new",
    rating: 4.7,
    reviews: 88,
    seller: "Adidas Hub Abuja",
  },
  {
    id: 33,
    name: 'laptop',
    price: 1480000,
    old: 1520000,
    image: "../images/ei_1777559063758-removebg-preview.png",
    cat: "electronics",
    badge: "sale",
    rating: 4.8,
    reviews: 204,
    seller: "computer village",
  },
  {
    id: 34,
    name: "Pajamas",
    price: 18500,
    old: 20000,
    image: "../images/ei_1777631580498-removebg-preview.png",
    cat: "fashion",
    badge: "new",
    rating: 4.6,
    reviews: 67,
    seller: "AsoEbi Store",
  },
  {
    id: 35,
    name: "Brown Suite",
    price: 42000,
    old: 40000,
    image: "../images/ei_1777632268806-removebg-preview.png",
    cat: "home",
    badge: "sale",
    rating: 4.8,
    reviews: 155,
    seller: "KitchenKing Lagos",
  },
  {
    id: 36,
    name: "School Bag",
    price: 50000,
    old: 60000,
    image: "../images/ei_1777632189629-removebg-preview.png",
    cat: "home",
    badge: "hot",
    rating: 4.9,
    reviews: 491,
    seller: "BackTOSchool NG",
  },
  {
    id: 37,
    name: "Leader Bag",
    price: 320000,
    old: null,
    image: "../images/ei_1777632229229-removebg-preview.png",
    cat: "home",
    badge: "new",
    rating: 4.9,
    reviews: 78,
    seller: "HomeElite",
  },
  {
    id: 38,
    name: "Kitchen stand",
    price: 780000,
    old: 900000,
    image: "../images/ei_1777632637121-removebg-preview.png",
    cat: "furniture",
    badge: "sale",
    rating: 4.8,
    reviews: 132,
    seller: "PhotoPro NG",
  },
  {
    id: 39,
    name: "Sneakers",
    price: 20000,
    old: null,
    image: "../images/ei_1777631709344-removebg-preview.png",
    cat: "home",
    badge: "new",
    rating: 4.6,
    reviews: 95,
    seller: "stephens store",
  },
  {
    id: 40,
    name: "Wallrope",
    price: 435000,
    old: 545000,
    image:"../images/3f9f186fa583af1aae7385f878b95abc.jpg",
    cat: "electronics",
    badge: "sale",
    rating: 4.5,
    reviews: 144,
    seller: "stephens store",
  },

];

function getCart() {
  return JSON.parse(localStorage.getItem("kk_cart") || "[]");
}
function setCart(c) {
  localStorage.setItem("kk_cart", JSON.stringify(c));
}
function getWish() {
  return JSON.parse(localStorage.getItem("kk_wish") || "[]");
}
function setWish(w) {
  localStorage.setItem("kk_wish", JSON.stringify(w));
}

function addToCart(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const cart = getCart();
  const ex = cart.find((x) => x.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  setCart(cart);
  refreshCartBadge();
  showToast(p.name + " added to cart!");
}

function removeFromCart(id) {
  let cart = getCart().filter((x) => x.id !== id);
  setCart(cart);
  refreshCartBadge();
}

function updateQty(id, delta) {
  let cart = getCart();
  const item = cart.find((x) => x.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter((x) => x.id !== id);
  }
  setCart(cart);
  refreshCartBadge();
}

function toggleWishlist(id) {
  let wish = getWish();
  const idx = wish.indexOf(id);
  if (idx >= 0) wish.splice(idx, 1);
  else wish.push(id);
  setWish(wish);
  refreshWishBadge();
  return idx < 0;
}

function refreshCartBadge() {
  const cart = getCart();
  const total = cart.reduce((s, x) => s + x.qty, 0);
  document
    .querySelectorAll("#cartCount")
    .forEach((el) => (el.textContent = total));
}
function refreshWishBadge() {
  const wish = getWish();
  document
    .querySelectorAll("#wishCount")
    .forEach((el) => (el.textContent = wish.length));
}

function showToast(msg, success = true) {
  let t = document.getElementById("toast");
  if (!t) return;
  document.getElementById("toastMsg").textContent = msg;
  t.style.opacity = "1";
  t.style.transform = "translateY(0)";
  setTimeout(() => {
    t.style.opacity = "0";
    t.style.transform = "translateY(20px)";
  }, 2600);
}

function badgeColor(b) {
  return b === "hot"
    ? "bg-red-500"
    : b === "new"
    ? "bg-green-500"
    : "bg-orange-400";
}
function starsHTML(r) {
  return Array.from(
    { length: 5 },
    (_, i) =>
      `<i class="fa fa-star ${
        i < Math.floor(r) ? "text-yellow-400" : "text-gray-300"
      } text-xs"></i>`
  ).join("");
}
function productCardHTML(p, prefix = "../") {
  return `<div class="card-hover bg-gradient-to-r from-amber-100 to-white rounded-xl shadow overflow-hidden cursor-pointer" onclick="window.location.href='${prefix}./product.html?id=${
    p.id
  }'">
    <div class="relative p-6 flex items-center justify-center bg-gradient-to-r from-amber-100 to-white" style="height:200px">
      <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain" style="max-height: 200px;">
      ${
        p.badge
          ? `<span class="absolute top-2 left-2 ${badgeColor(
              p.badge
            )} text-white text-xs px-2 py-0.5 rounded-full font-semibold uppercase">${
              p.badge
            }</span>`
          : ""
      }
      <button onclick="event.stopPropagation();handleWish(${
        p.id
      },this)" class="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:bg-red-50">
        <i class="${
          getWish().includes(p.id)
            ? "fa-solid text-red-500"
            : "fa-regular text-gray-400"
        } fa-heart text-xs"></i>
      </button>
    </div>
    <div class="p-3">
      <p class="text-gray-400 text-xs truncate">${p.seller}</p>
      <h4 class="text-[#280b08] text-sm font-semibold truncate mt-0.5">${
        p.name
      }</h4>
      <div class="flex items-center gap-1 my-1">${starsHTML(
        p.rating
      )}<span class="text-gray-400 text-xs">(${p.reviews})</span></div>
      <div class="flex items-center justify-between mt-2">
        <div>
          <span class="text-blue-700 font-bold text-sm">₦${p.price.toLocaleString()}</span>
          ${
            p.old
              ? `<span class="text-gray-400 text-xs line-through ml-1">₦${p.old.toLocaleString()}</span>`
              : ""
          }
        </div>
        <button onclick="event.stopPropagation();addToCart(${
          p.id
        })" class="primary-btn px-3 py-1 rounded-full text-xs font-semibold">
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </div>
  </div>`;
}

function handleWish(id, btn) {
  const added = toggleWishlist(id);
  const icon = btn.querySelector("i");
  icon.className = added
    ? "fa-solid fa-heart text-xs text-red-500"
    : "fa-regular fa-heart text-xs text-gray-400";
  showToast(added ? "Added to wishlist!" : "Removed from wishlist");
}

// Run on page load
window.addEventListener("DOMContentLoaded", () => {
  refreshCartBadge();
  refreshWishBadge();
});
