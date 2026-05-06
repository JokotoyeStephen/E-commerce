document.write(`
<footer class="bg-[#280b08] text-[#f9e7c9] mt-12">
  <div class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <div class="flex items-center gap-2 mb-4"><i class="fa-solid fa-bag-shopping text-[#f2d04e] text-xl"></i><span class="text-lg font-bold text-[#f2d04e]">KATA KARA</span></div>
      <p class="text-xs opacity-60 leading-relaxed">Nigeria's premium marketplace.</p>
      <div class="flex gap-3 mt-4">
        <a href="#" class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f2d04e] hover:text-[#280b08] transition"><i class="fab fa-facebook-f text-xs"></i></a>
        <a href="#" class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f2d04e] hover:text-[#280b08] transition"><i class="fab fa-twitter text-xs"></i></a>
        <a href="#" class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f2d04e] hover:text-[#280b08] transition"><i class="fab fa-instagram text-xs"></i></a>
      </div>
    </div>
    <div><h4 class="font-bold mb-4 text-[#f2d04e] text-xs uppercase tracking-widest">Buyers</h4>
      <ul class="space-y-2 text-xs opacity-70">
        <li><a href="shop.html" class="hover:text-[#f2d04e]">How to Buy</a></li>
        <li><a href="track-order.html" class="hover:text-[#f2d04e]">Track Order</a></li>
        <li><a href="cart.html" class="hover:text-[#f2d04e]">My Cart</a></li>
        <li><a href="wishlist.html" class="hover:text-[#f2d04e]">Wishlist</a></li>
      </ul>
    </div>
    <div><h4 class="font-bold mb-4 text-[#f2d04e] text-xs uppercase tracking-widest">Sellers</h4>
      <ul class="space-y-2 text-xs opacity-70">
        <li><a href="seller-signup.html" class="hover:text-[#f2d04e]">Sell on Kata Kara</a></li>
        <li><a href="seller-dashboard.html" class="hover:text-[#f2d04e]">Seller Dashboard</a></li>
        <li><a href="login.html" class="hover:text-[#f2d04e]">Seller Login</a></li>
      </ul>
    </div>
    <div><h4 class="font-bold mb-4 text-[#f2d04e] text-xs uppercase tracking-widest">Company</h4>
      <ul class="space-y-2 text-xs opacity-70">
        <li><a href="about.html" class="hover:text-[#f2d04e]">About Us</a></li>
        <li><a href="contact.html" class="hover:text-[#f2d04e]">Contact</a></li>
        <li><a href="blog.html" class="hover:text-[#f2d04e]">Blog</a></li>
      </ul>
    </div>
  </div>
  <div class="border-t border-white/10 py-4 text-center text-xs opacity-50">&copy; 2025 Kata Kara. All rights reserved. Made with love in Nigeria.</div>
</footer>
<div id="toast" class="fixed bottom-6 right-6 bg-[#280b08] text-[#f9e7c9] px-5 py-3 rounded-xl shadow-xl text-sm z-50 opacity-0 pointer-events-none flex items-center gap-2" style="transition:opacity .3s,transform .3s;transform:translateY(20px)">
  <i class="fa fa-check-circle text-[#f2d04e]"></i><span id="toastMsg">Done!</span>
</div>`);
