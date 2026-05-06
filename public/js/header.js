// Inject shared header for pages/ directory
document.write(`
<div class="bg-[#280b08] text-[#f9e7c9] text-xs py-1.5 px-4 flex justify-between items-center">
  <span><i class="fa fa-truck mr-1"></i>Free delivery on orders over &#8358;50,000</span>
  <div class="flex gap-4"><a href="seller-signup.html" class="hover:text-[#f2d04e]"><i class="fa fa-store mr-1"></i>Sell on Kata Kara</a></div>
</div>
<header class="bg-[#f9e7c9] shadow-sm sticky top-0 z-50 border-b border-[#280b08]/10">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
    <a href="../index.html" class="flex items-center gap-2 flex-shrink-0">
      <span class="text-xl font-bold text-[#280b08] tracking-wide">KATA KARA</span>
    </a>
    <div class="hidden md:flex flex-1 mx-6">
      <div class="flex w-full">
        <input id="hSearchInput" type="text" placeholder="Search products..." class="flex-1 border border-[#280b08]/30 rounded-l-full px-5 py-2 focus:outline-none focus:ring-1 focus:ring-[#280b08] bg-white text-sm" onkeydown="if(event.key==='Enter'){var q=this.value.trim();if(q)window.location.href='shop.html?search='+encodeURIComponent(q);}"/>
        <button class="primary-btn px-5 rounded-r-full text-sm font-medium" onclick="var q=document.getElementById('hSearchInput').value.trim();if(q)window.location.href='shop.html?search='+encodeURIComponent(q);"><i class="fa fa-search"></i></button>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <a href="wishlist.html" class="relative hidden sm:block">
        <i class="fa-regular fa-heart text-xl hover:text-red-500"></i>
        <span id="wishCount" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
      </a>
      <a href="cart.html" class="relative">
        <i class="fa fa-shopping-cart text-xl hover:text-[#f2d04e]"></i>
        <span id="cartCount" class="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
      </a>
      <a href="login.html" class="hidden sm:block"><i class="fa-regular fa-user text-xl"></i></a>
    </div>
  </div>
</header>
<nav class="bg-[#280b08] text-[#f9e7c9]">
  <div class="max-w-7xl mx-auto px-4 flex gap-1 text-sm font-medium overflow-x-auto">
    <a href="index.html" class="py-3 px-3 hover:text-[#f2d04e] whitespace-nowrap">Home</a>
    <a href="shop.html" class="py-3 px-3 hover:text-[#f2d04e] whitespace-nowrap">Shop</a>
    <a href="about.html" class="py-3 px-3 hover:text-[#f2d04e] whitespace-nowrap">About</a>
    <a href="blog.html" class="py-3 px-3 hover:text-[#f2d04e] whitespace-nowrap">Blog</a>
    <a href="contact.html" class="py-3 px-3 hover:text-[#f2d04e] whitespace-nowrap">Contact</a>
    <a href="seller-signup.html" class="py-3 px-3 text-[#f2d04e] whitespace-nowrap ml-auto font-bold"><i class="fa fa-store mr-1"></i>Start Selling</a>
  </div>
</nav>`);
