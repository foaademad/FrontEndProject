
$(document).ready(function () {
// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  $('.cart-count').text(count);

  // Update checkout button state
  const total = calculateTotal();
  $('.checkout-btn').prop('disabled', count === 0);

  // Show/hide empty cart message
  if (count === 0) {
      $('#emptyCart').show();
      $('#cartItems').hide();
      $('.cart-footer').hide();
  } else {
      $('#emptyCart').hide();
      $('#cartItems').show();
      $('.cart-footer').show();
  }
}

function calculateTotal() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  $('.total-amount').text(`$${total.toFixed(2)}`);
  return total;
}

function updateCartDisplay() {
  const cartItems = $('#cartItems');
  cartItems.empty();

  cart.forEach(item => {
      cartItems.append(
          `<div class="cart-item" data-id="${item.id}">
              <div class="cart-item-image">
                  <img src="${item.image}" alt="${item.title}">
              </div>
              <div class="cart-item-details">
                  <h6 class="cart-item-title">${item.title}</h6>
                  <p class="cart-item-price">$${item.price}</p>
                  <div class="cart-item-quantity">
                      <button class="btn btn-sm btn-outline-secondary decrease-quantity">-</button>
                      <span class="quantity-value">${item.quantity}</span>
                      <button class="btn btn-sm btn-outline-secondary increase-quantity">+</button>
                      <button class="btn btn-sm btn-outline-danger ms-2 remove-item">
                          <i class="fas fa-trash"></i>
                      </button>
                  </div>
              </div>
          </div>`
      );
  });

  updateCartCount();
  calculateTotal();

  // Save to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to Cart Button Click Handler
$(document).on('click', '.add-to-cart', function () {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // Check if user is logged in
  if (!currentUser || !currentUser.email) {
      alert('You must be logged in to add books to the cart.');
      window.location.href = './sign-up.html';
      return;
  }

  const bookCard = $(this).closest('.book-card');
  const bookId = parseInt(bookCard.data('id'));
  const book = books.find(b => b.id === bookId);

  if (book) {
      const existingItem = cart.find(item => item.id === bookId);

      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cart.push({
              ...book,
              quantity: 1
          });
      }

      // Show success toast
      const toast = $(
          `<div class="toast position-fixed bottom-0 end-0 m-3" role="alert">
              <div class="toast-header">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <strong class="me-auto">Success</strong>
                  <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
              </div>
              <div class="toast-body">
                  ${book.title} has been added to your cart!
              </div>
          </div>`
      ).appendTo('body');

      const bsToast = new bootstrap.Toast(toast[0]);
      bsToast.show();

      // Remove toast after it's hidden
      toast.on('hidden.bs.toast', function () {
          $(this).remove();
      });

      updateCartDisplay();
  }
});

// Quantity Controls
$(document).on('click', '.increase-quantity', function () {
  const cartItem = $(this).closest('.cart-item');
  const id = parseInt(cartItem.data('id'));
  const item = cart.find(item => item.id === id);
  if (item) {
      item.quantity += 1;
      updateCartDisplay();
  }
});

$(document).on('click', '.decrease-quantity', function () {
  const cartItem = $(this).closest('.cart-item');
  const id = parseInt(cartItem.data('id'));
  const item = cart.find(item => item.id === id);
  if (item && item.quantity > 1) {
      item.quantity -= 1;
      updateCartDisplay();
  }
});

// Remove Item
$(document).on('click', '.remove-item', function () {
  const cartItem = $(this).closest('.cart-item');
  const id = parseInt(cartItem.data('id'));
  cart = cart.filter(item => item.id !== id);
  updateCartDisplay();
});

// Initialize cart display
updateCartDisplay();

const books = [
  {
      id: 1,
      title: "The Art of Design",
      description: "Master the principles of modern design thinking",
      price: 29.99,
      category: "Design",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3"
  },
  {
      id: 2,
      title: "Creative Coding",
      description: "Learn to code through creative projects",
      price: 34.99,
      category: "Programming",
      image: "https://images.unsplash.com/photo-1550592704-6c76defa9985?ixlib=rb-4.0.3"
  },
  {
      id: 3,
      title: "Digital Marketing",
      description: "Modern strategies for digital marketing success",
      price: 24.99,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3"
  },
  {
      id: 4,
      title: "Business Strategy",
      description: "Essential guide to modern business strategy",
      price: 39.99,
      category: "Business",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3"
  }
];

const featuredContainer = $('#featured-books-container');
books.forEach(book => {
  featuredContainer.append(
      `<div class="swiper-slide">
          <div class="book-card" data-id="${book.id}">
              <img src="${book.image}" alt="${book.title}" class="book-image">
              <div class="book-content">
                  <span class="book-category">${book.category}</span>
                  <h3 class="book-title">${book.title}</h3>
                  <p class="book-description">${book.description}</p>
                  <div class="book-footer">
                      <span class="book-price">$${book.price}</span>
                      <button class="btn btn-primary-custom add-to-cart">
                          <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                      </button>
                  </div>
              </div>
          </div>
      </div>`
  );
});

// Initialize Swiper
const swiper = new Swiper('.featured-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },
  breakpoints: {
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      }
  }
});
});


  document.addEventListener("DOMContentLoaded", function () {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

      // عناصر الناف بار
      const signInItem = document.getElementById('sign-in-item');
      const signUpItem = document.getElementById('sign-up-item');
      const userIconItem = document.getElementById('user-icon-item');

      // إذا كان المستخدم مسجلاً للدخول
      if (currentUser && currentUser.email) {
          // إخفاء أزرار Sign In و Sign Up
          signInItem.classList.add('d-none');
          signUpItem.classList.add('d-none');

          // إظهار أيقونة المستخدم
          userIconItem.classList.remove('d-none');
      }
  });
