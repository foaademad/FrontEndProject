// // Categories and Books Data

// const categories = {
//     business: [
//         {
//             id: 1,
//             title: "Your Business Name",
//             author: "Michael Porter",
//             price: 39.99,
//             category: "Business",
//             image: "src/images/Business-1Cover.png",
//             image2: "src/images/Business-1Back.png",
//             status: "In Stock",
//             pages: 300
//         },
//         {
//             id: 2,
//             title: "Leadership Essentials",
//             author: "Simon Sinek",
//             price: 44.99,
//             category: "Business",
//             image: "src/images/Business-2Cover.png",
//             image2: "src/images/Business-2Back.png",
//             status: "In Stock",
//             pages: 250
//         },
//         {
//             id: 3,
//             title: "Financial Management",
//             author: "Warren Buffett",
//             price: 49.99,
//             category: "Business",
//             image: "src/images/Business-3Cover.png",
//             image2: "src/images/Business-3Back.png",
//             status: "In Stock",
//             pages: 300
//         },
//         {
//             id: 4,
//             title: "Business Enterprise Cover", 
//             author: "Richard Branson",
//             price: 34.99,
//             category: "Business",
//             image: "src/images/Business-4Cover.png",
//             image2: "src/images/Business-4Back.png",
//             status: "In Stock",
//             pages: 350
//         },
//         {
//             id: 5,
//             title: "Data Science For Executives",
//             author: "David Anderson",
//             price: 42.99,
//             category: "Business",
//             image: "src/images/Business-5Cover.png",
//             image2: "src/images/Business-5Back.png",
//             status: "In Stock",
//             pages: 400
//         },
//         {
//             id: 6,
//             title: "Corporate Finance",
//             author: "Robert Smith",
//             price: 45.99,
//             category: "Business",
//             image: "src/images/Business-6Cover.png",
//             image2: "src/images/Business-6Back.png",
//             status: "In Stock",
//             pages: 200
//         }
//     ],
//     marketing: [
//         {
//             id: 7,
//             title: "Push Mo 'Yan!",
//             author: "Neil Patel",
//             price: 29.99,
//             category: "Marketing",
//             image: "src/images/Marketing-1Cover.png",
//             image2: "src/images/Marketing-1Back.png",
//             status: "In Stock",
//             pages: 600
//         },
//         {
//             id: 8,
//             title: "Recipe Planner",
//             author: "Gary Vaynerchuk",
//             price: 32.99,
//             category: "Marketing",
//             image: "src/images/Marketing-2Cover.png",
//             image2: "src/images/Marketing-2Back.png",
//             status: "In Stock",
//             pages: 700
//         },
//         {
//             id: 9,
//             title: "It Tickled The Whiskers Of My Soul",
//             author: "Ann Handley",
//             price: 27.99,
//             category: "Marketing",
//             image: "src/images/Marketing-3Cover.png",
//             image2: "src/images/Marketing-3Back.png",
//             status: "In Stock",
//             pages: 300
//         },
//         {
//             id: 10,
//             title: "Drawing Nearer",
//             author: "Rand Fishkin",
//             price: 35.99,
//             category: "Marketing",
//             image: "src/images/Marketing-4Cover.png",
//             image2: "src/images/Marketing-4Back.png",
//             status: "In Stock",
//             pages: 500
//         },
//         {
//             id: 11,
//             title: "The Best Book In The World",
//             author: "Sarah Johnson",
//             price: 24.99,
//             category: "Marketing",
//             image: "src/images/Marketing-5Cover.png",
//             image2: "src/images/Marketing-5Back.png",
//             status: "In Stock",
//             pages: 280
//         },
//         {
//             id: 12,
//             title: "BY the Best-selling Author Wikk Storr",
//             author: "Seth Godin",
//             price: 38.99,
//             category: "Marketing",
//             image: "src/images/Marketing-6Cover.png",
//             image2: "src/images/Marketing-6Back.png",
//             status: "In Stock",
//             pages: 377
//         }
//     ],
//     design: [
//         {
//             id: 13,
//             title: "Business Agency",
//             author: "John Doe",
//             price: 36.99,
//             category: "Design",
//             image: "src/images/Design-1Cover.png",
//             image2: "src/images/Design-1Back.png",
//             status: "In Stock",
//             pages: 150
//         },
//         {
//             id: 14,
//             title: "Shaft Of Truth",
//             author: "Paul Rand",
//             price: 28.99,
//             category: "Design",
//             image: "src/images/Design-2Cover.png",
//             image2: "src/images/Design-2Back.png",
//             status: "In Stock",
//             pages: 235
//         },
//         {
//             id: 15,
//             title: "The Fault In Our Stars",
//             author: "Ethan Marcotte",
//             price: 33.99,
//             category: "Design",
//             image: "src/images/Design-3Cover.png",
//             image2: "src/images/Design-3Back.png",
//             status: "In Stock",
//             pages: 258
//         },
//         {
//             id: 16,
//             title: "Clueless In Cleveland",
//             author: "Josef Albers",
//             price: 26.99,
//             category: "Design",
//             image: "src/images/Design-4Cover.png",
//             image2: "src/images/Design-4Back.png",
//             status: "In Stock",
//             pages: 299
//         },
//         {
//             id: 17,
//             title: "Were Wonders",
//             author: "Erik Spiekermann",
//             price: 29.99,
//             category: "Design",
//             image: "src/images/Design-5Cover.png",
//             image2: "src/images/Design-5Back.png",
//             status: "In Stock",
//             pages: 125
//         },
//         {
//             id: 18,
//             title: "Corporate Design",
//             author: "Alla Kholmatova",
//             price: 37.99,
//             category: "Design",
//             image: "src/images/Design-6Cover.png",
//             image2: "src/images/Design-6Back.png",
//             status: "In Stock",
//             pages: 486
//         }
//     ],
//     programming: [
//         {
//             id: 19,
//             title: "Programming Languages",
//             author: "Douglas Crockford",
//             price: 44.99,
//             category: "Programming",
//             image: "src/images/Programming-1Cover.png",
//             image2: "src/images/Programming-1Cover.png",
//             status: "In Stock",
//             pages: 456
//         },
//         {
//             id: 20,
//             title: "Computer Programming",
//             author: "Guido van Rossum",
//             price: 39.99,
//             category: "Programming",
//             image: "src/images/Programming-2Cover.png",
//             image2: "src/images/Programming-2Cover.png",
//             status: "In Stock",
//             pages: 300
//         },
//         {
//             id: 21,
//             title: "Ruby Programming",
//             author: "Dan Abramov",
//             price: 42.99,
//             category: "Programming",
//             image: "src/images/Programming-3Cover.png",
//             image2: "src/images/Programming-3Cover.png",
//             status: "In Stock",
//             pages: 258
//         },
//         {
//             id: 22,
//             title: "Ansi C Programming",
//             author: "Ryan Dahl",
//             price: 38.99,
//             category: "Programming",
//             image: "src/images/Programming-4Cover.png",
//             image2: "src/images/Programming-4Cover.png",
//             status: "In Stock",
//             pages: 159
//         },
//         {
//             id: 23,
//             title: "The Complete Software Developer's Career Guide",
//             author: "Robert Martin",
//             price: 47.99,
//             category: "Programming",
//             image: "src/images/Programming-5Cover.png",
//             image2: "src/images/Programming-5Cover.png",
//             status: "In Stock",
//             pages: 693
//         },
//         {
//             id: 24,
//             title: "Practical Programming",
//             author: "Thomas Cormen",
//             price: 45.99,
//             category: "Programming",
//             image: "src/images/Programming-6Cover.png",
//             image2: "src/images/Programming-6Cover.png",
//             status: "out of Stock",
//             pages: 349
//         }
//     ]
// };

// // Global variables for pagination

// const BOOKS_PER_PAGE = 12;
// let currentPage = 1;

// //function to search books
// function searchBooks() {
//     const searchTerm = document.getElementById('book-search').value.toLowerCase();
//     const books = getAllBooks();
//     const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
//     displayBooks(filteredBooks);
// }

// // Store categories in localStorage
// localStorage.setItem('categories', JSON.stringify(categories));

// // Function to get all books
// function getAllBooks() {
//     const allCategories = JSON.parse(localStorage.getItem('categories'));
//     return Object.values(allCategories).flat();
// }

// // Function to get books by category
// function getBooksByCategory(categoryName) {
//     const allCategories = JSON.parse(localStorage.getItem('categories'));
//     if (categoryName === 'all') {
//         return getAllBooks();
//     }
//     return allCategories[categoryName.toLowerCase()] || [];
// }

// // Function to display books
// function displayBooks(books) {
//     const resultsContent = document.getElementById('results-content');
//     const resultsRange = document.getElementById('results-range');
//     const totalResults = document.getElementById('total-results');
//     const pagination = document.querySelector('nav[aria-label="Page navigation example"]');

//     // Update results count
//     const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
//     const endIndex = Math.min(startIndex + BOOKS_PER_PAGE, books.length);
//     resultsRange.textContent = `${startIndex + 1}-${endIndex}`;
//     totalResults.textContent = books.length;

//     // Show/hide pagination based on category
//     const currentCategory = document.querySelector('.categories a.active').textContent.trim().toLowerCase();
//     if (currentCategory === 'all books') {
//         pagination.style.display = 'block';
//     } else {
//         pagination.style.display = 'none';
//         currentPage = 1; // Reset to first page when selecting category
//     }

//     // Clear previous content
//     resultsContent.innerHTML = '';

//     // Create bookgrid container
//     const bookgrid = document.createElement('div');
//     bookgrid.className = 'bookgrid';

//     // Get books for current page
//     const booksToShow = books.slice(startIndex, endIndex);
//    // عند عرض الكتب
// booksToShow.forEach(book => {
//     const bookCard = `
//         <div class="book">
//             <img src="${book.image}" alt="${book.title}" onclick="goToBookDetails(${JSON.stringify(book).replace(/"/g, '&quot;')})">
//             <h3 onclick="goToBookDetails(${JSON.stringify(book).replace(/"/g, '&quot;')})" style="cursor: pointer">${book.title}</h3>
//             <p class="price">$${book.price}</p>
//             <p class="status">${book.status}</p>
//             <div class="icons">
//                 ${book.status === 'In Stock' ? `<a href="#" class="cart-icon"><i class="fas fa-shopping-cart"></i></a>` : ''}
//                 <a href="#" class="cart-icon" onclick="event.preventDefault(); goToBookDetails(${JSON.stringify(book).replace(/"/g, '&quot;')})"><i class="fas fa-eye"></i></a>
//             </div>
//             ${book.status === 'In Stock' ? `<button class="add-to-cart" data-id="${book.id}"><i class="fas fa-shopping-cart"></i> Add to Cart</button>` : ''}
//         </div>
//     `;
//     bookgrid.innerHTML += bookCard;
// });
// // ================================================

// // إضافة كتاب إلى السلة
// function addToCart(bookId) {
//     // جلب السلة من localStorage أو إنشاء سلة جديدة إذا لم تكن موجودة
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
//     // البحث عن الكتاب في جميع الفئات
//     const book = findBookById(bookId);
//     if (!book) return; // إذا لم يتم العثور على الكتاب، التوقف عن إضافة الكتاب
    
//     // البحث عن الكتاب في السلة
//     const existingBook = cart.find(item => item.id === bookId);

//     if (existingBook) {
//         // إذا كان الكتاب موجودًا بالفعل، قم بزيادة الكمية
//         existingBook.quantity += 1;
//     } else {
//         // إذا لم يكن موجودًا، أضفه إلى السلة مع تفاصيل الكتاب
//         cart.push({
//             id: book.id,
//             title: book.title,
//             author: book.author,
//             price: book.price,
//             image: book.image,
//             image2: book.image2,
//             quantity: 1
//         });
//     }
    
//     // تخزين السلة المحدثة في localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));
    
//     // تحديث رقم السلة
//     updateCartCount();
// }

// // البحث عن الكتاب في جميع الفئات بناءً على ID الكتاب
// function findBookById(bookId) {
//     for (let category in categories) {
//         const book = categories[category].find(b => b.id === bookId);
//         if (book) {
//             return book;
//         }
//     }
//     return null; // إذا لم يتم العثور على الكتاب
// }

// // تحديث رقم السلة
// function updateCartCount() {
//     // جلب السلة من localStorage
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     // حساب العدد الإجمالي للعناصر في السلة
//     const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
//     // استهداف عنصر رقم السلة
//     const cartCountElement = document.querySelector('.cart-count');

//     if (cartCountElement) {
//         // تحديث النص داخل العنصر
//         cartCountElement.textContent = cartCount;
//     }
// }

// // التأكد من تحديث رقم السلة عند تحميل الصفحة
// document.addEventListener('DOMContentLoaded', () => {
//     updateCartCount(); // تحديث الرقم عند تحميل الصفحة
// });

// // التعامل مع زر "Add to Cart"
// document.addEventListener('click', (e) => {
//     if (e.target.classList.contains('add-to-cart')) {
//         const bookId = parseInt(e.target.getAttribute('data-id'), 10);
//         addToCart(bookId);
//     }
// });


// // ==========================================================
//     // Add bookgrid to results content
//     resultsContent.appendChild(bookgrid);

//     // Update pagination
//     updatePagination(books.length);
// }

// // Function to update pagination
// function updatePagination(totalBooks) {
//     const totalPages = Math.ceil(totalBooks / BOOKS_PER_PAGE);
//     const pagination = document.querySelector('.pagination');
    
//     if (pagination) {
//         pagination.innerHTML = `
//             <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
//                 <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>
//             </li>
//             ${generatePageNumbers(totalPages)}
//             <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
//                 <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>
//             </li>
//         `;
//     }
// }

// // Function to generate page numbers
// function generatePageNumbers(totalPages) {
//     let pages = '';
//     for (let i = 1; i <= totalPages; i++) {
//         pages += `
//             <li class="page-item ${currentPage === i ? 'active' : ''}">
//                 <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
//             </li>
//         `;
//     }
//     return pages;
// }

// // Function to change page
// function changePage(newPage) {
//     const books = getAllBooks();
//     const totalPages = Math.ceil(books.length / BOOKS_PER_PAGE);
    
//     if (newPage >= 1 && newPage <= totalPages) {
//         currentPage = newPage;
//         displayBooks(books);
//     }
// }

// // Function to sort books
// function sortResults(sortType) {
//     let books = getAllBooks();
    
//     switch(sortType) {
//         case 'name-asc':
//             books.sort((a, b) => a.title.localeCompare(b.title));
//             break;
//         case 'name-desc':
//             books.sort((a, b) => b.title.localeCompare(a.title));
//             break;
//         case 'price-asc':
//             books.sort((a, b) => a.price - b.price);
//             break;
//         case 'price-desc':
//             books.sort((a, b) => b.price - a.price);
//             break;
//         default:
//             // Default sorting by ID
//             books.sort((a, b) => a.id - b.id);
//     }

//     displayBooks(books);
// }

// // Function to update price display
// function updatePriceDisplay() {
//     const minPrice = document.getElementById('price-min').value;
//     const maxPrice = document.getElementById('price-max').value;
//     document.getElementById('price-min-display').textContent = minPrice;
//     document.getElementById('price-max-display').textContent = maxPrice;
// }

// // Function to filter books by price range
// function filterByPrice() {
//     const minPrice = parseFloat(document.getElementById('price-min').value);
//     const maxPrice = parseFloat(document.getElementById('price-max').value);
//     const books = getAllBooks();
    
//     const filteredBooks = books.filter(book => {
//         const price = parseFloat(book.price);
//         return price >= minPrice && price <= maxPrice;
//     });
    
//     displayBooks(filteredBooks);
// }

// // Function to filter by product status
// function filterProductStatus() {
//     const status = document.getElementById('status').value;
//     const books = getAllBooks();
    
//     let filteredBooks;
//     if (status === 'all') {
//         filteredBooks = books;
//     } else {
//         const statusText = status === 'in' ? 'In Stock' : 'out of Stock';
//         filteredBooks = books.filter(book => book.status === statusText);
//     }
    
//     displayBooks(filteredBooks);
// }

// // Function to navigate to book details page
// function goToBookDetails(book) {
//     try {
//         console.log('Selected book:', book); // Debug log
//         // Store the selected book data in localStorage
//         localStorage.setItem('selectedBook', JSON.stringify(book));
//         // Navigate to eachcategory.html
//         window.location.href = 'eachcategory.html';
//     } catch (error) {
//         console.error('Error in goToBookDetails:', error);
//     }
// }

// // Initialize page
// document.addEventListener('DOMContentLoaded', () => {
//     // Display all books initially
//     const allBooks = getAllBooks();
//     displayBooks(allBooks);

//     // Set up price filter button
//     const filterButton = document.getElementById('filter-button');
//     if (filterButton) {
//         filterButton.addEventListener('click', filterByPrice);
//     }

//     // Initialize price display
//     updatePriceDisplay();

//     // Category click handlers
//     const categoryLinks = document.querySelectorAll('.categories a');
//     categoryLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
            
//             // Update active state
//             categoryLinks.forEach(l => l.classList.remove('active'));
//             link.classList.add('active');

//             // Get category name from text content
//             const category = link.textContent.trim().toLowerCase();
            
//             // Get and display books
//             let books;
//             if (category === 'all books') {
//                 books = getAllBooks();
//             } else {
//                 books = getBooksByCategory(category);
//             }
//             displayBooks(books);
//         });
//     });

//     // Sort select handler
//     const sortSelect = document.getElementById('sort-select');
//     if (sortSelect) {
//         sortSelect.addEventListener('change', (e) => {
//             sortResults(e.target.value);
//         });
//     }
// });



      

// // ================================================


// قراءة البيانات من localStorage
const storedProducts = JSON.parse(localStorage.getItem('products'));

// التحقق إذا كانت هناك منتجات مخزنة
if (storedProducts && storedProducts.length > 0) {
    const bookGrid = document.querySelector('.bookgrid');
    
    // التكرار على كل منتج وعرضه
    storedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price}</div>
            <div class="product-status">${product.status}</div>
            <button class="add-to-cart mt-3">Add to Cart</button>
        `;
        
        bookGrid.appendChild(productDiv);
    });
} else {
    const bookGrid = document.querySelector('.bookgrid');
    bookGrid.innerHTML = "<p>No products found.</p>";
}
// -------------------------------------
       // إضافة حدث النقر إلى كل زر "Add to Cart"

// --------------------------------------------------------------------
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart")) {
        const productElement = event.target.closest(".product-div");

        if (!productElement) {
            console.error("Product element not found!");
            return;
        }

        const product = {
            id: parseInt(productElement.dataset.id),
            title: productElement.querySelector(".product-title").textContent,
            description: productElement.dataset.description || "No description available",
            price: parseFloat(productElement.querySelector(".product-price").textContent.replace("$", "")),
            category: productElement.dataset.category || "General",
            image: productElement.querySelector("img").src,
            quantity: 1
        };

        // استرجاع العربة من localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // التحقق إذا كان المنتج موجودًا
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push(product);
        }

        // تحديث العربة في localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // تحديث رقم السلة
        updateCartCount();

    }
});

// وظيفة لحساب وتحديث رقم السلة
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    // تحديث النص في العنصر #cart-count
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = totalCount;
    }
}

// تحديث رقم السلة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", updateCartCount);
