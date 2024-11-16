document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const cartIcon = document.querySelector('.cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const checkoutButton = document.getElementById('checkout-button');
    const productGrid = document.querySelector('.product-grid');
    const dealsSlider = document.querySelector('.deals-slider');
    const newsletterForm = document.getElementById('newsletter-form');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggle.innerHTML = body.classList.contains('dark-theme') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Cart sidebar
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('open');
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    // Sample product data
    const products = [
        { id: 1, name: 'Smartphone X', price: 599.99, image: '/placeholder.svg?height=200&width=200&text=Smartphone X' },
        { id: 2, name: 'Laptop Pro', price: 1299.99, image: '/placeholder.svg?height=200&width=200&text=Laptop Pro' },
        { id: 3, name: 'Wireless Earbuds', price: 129.99, image: '/placeholder.svg?height=200&width=200&text=Wireless Earbuds' },
        { id: 4, name: 'Smart Watch', price: 249.99, image: '/placeholder.svg?height=200&width=200&text=Smart Watch' },
        { id: 5, name: '4K TV', price: 799.99, image: '/placeholder.svg?height=200&width=200&text=4K TV' },
        { id: 6, name: 'Gaming Console', price: 499.99, image: '/placeholder.svg?height=200&width=200&text=Gaming Console' },
        { id: 7, name: 'Digital Camera', price: 699.99, image: '/placeholder.svg?height=200&width=200&text=Digital Camera' },
        { id: 8, name: 'Bluetooth Speaker', price: 79.99, image: '/placeholder.svg?height=200&width=200&text=Bluetooth Speaker' },
    ];

    // Sample deals data
    const deals = [
        { id: 101, name: 'Smart Home Bundle', originalPrice: 299.99, discountedPrice: 249.99, image: '/placeholder.svg?height=200&width=200&text=Smart Home Bundle' },
        { id: 102, name: 'Fitness Tracker', originalPrice: 99.99, discountedPrice