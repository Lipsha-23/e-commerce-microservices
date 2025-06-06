const pages = {
  home: "<div class='container'><h2>Welcome to our E-Commerce Store</h2><p>Explore a wide range of products!</p></div>",
  products: "<div class='container'><h2>Products</h2><div id='product-list'></div></div>",
  cart: "<div class='container'><h2>Cart</h2><div id='cart-items'></div></div>",
  checkout: "<div class='container'><h2>Checkout</h2><form><input placeholder='Shipping Address'><button type='submit'>Place Order</button></form></div>",
  orders: "<div class='container'><h2>Your Orders</h2><div id='order-history'></div></div>",
  admin: "<div class='container'><h2>Admin Panel</h2><p>Manage products, orders and users.</p></div>",
  login: `<div class='container'><h2>Login</h2>
    <form onsubmit='return loginUser(event)'>
      <input id='username' placeholder='Username' required />
      <input id='password' type='password' placeholder='Password' required />
      <button type='submit'>Login</button>
    </form></div>`
};

function loadPage(page) {
  document.getElementById("main-content").innerHTML = pages[page];
  if (page === "products") loadProducts();
  if (page === "cart") loadCart();
  if (page === "orders") loadOrders();
}

function loadProducts() {
  const products = [
    { id: 1, name: "Shoes", price: 50 },
    { id: 2, name: "Shirt", price: 30 }
  ];
  const container = document.getElementById("product-list");
  container.innerHTML = products.map(p => 
    `<div><strong>${p.name}</strong> - $${p.price} 
    <button onclick="addToCart(${p.id})">Add to Cart</button></div>`).join("");
}

function addToCart(productId) {
  alert("Product " + productId + " added to cart!");
}

function loadCart() {
  document.getElementById("cart-items").innerHTML = "<p>Cart items will be listed here.</p>";
}

function loadOrders() {
  document.getElementById("order-history").innerHTML = "<p>Order history will show here.</p>";
}

function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  localStorage.setItem("token", "dummy-jwt-token-for-" + username);
  alert("Logged in!");
  loadPage("home");
  return false;
}

window.onload = () => loadPage("home");
