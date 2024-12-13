document.addEventListener('DOMContentLoaded', () => {
    // استرجاع عربة التسوق من localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // تحديث عدد المنتجات في السلة
    function updateCartCount() {
        document.querySelector('.cart-count').textContent = cart.length; // عدد المنتجات الفريدة
    }

    // تحديث الجدول
    function updateCartTable() {
        const cartTable = document.querySelector('#cart-table');
        cartTable.innerHTML = ''; // تنظيف الجدول قبل إعادة ملئه

        cart.forEach(item => {
            const row = document.createElement('tr');
            row.dataset.id = item.id;
            row.innerHTML = `
                <td>
                <img src="${item.image}" style="width: 30px; height: 30px; object-fit: cover;">
                ${item.title}</td>
                <td>$${item.price}</td>
                <td>
                    <div style="display: flex;">
                        <button class="btn btn-sm btn-outline-secondary decrease-quantity">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary increase-quantity">+</button>
                    </div>
                </td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger remove-item">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            cartTable.appendChild(row);
        });

        // حفظ التحديثات في localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartTotals(); // تحديث الإجماليات بعد تحديث الجدول
    }

    // تحديث الإجمالي الكلي والسعر الإجمالي
    function updateCartTotals() {
        const shippingCost = 5.00; // تكلفة الشحن
        const totalBill = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
        const totalAmount = (parseFloat(totalBill) + shippingCost).toFixed(2);

        // تحديث القيم في واجهة المستخدم
        document.querySelector('.cart-total-bill').textContent = `$${totalBill}`;
        document.querySelector('.cart-shipping').textContent = `$${shippingCost.toFixed(2)}`;
        document.querySelector('.cart-total-amount').textContent = `$${totalAmount}`;
    }

    // إضافة منتج جديد إلى السلة
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1; // إذا كان المنتج موجودًا، زيادة الكمية
        } else {
            cart.push({ ...product, quantity: 1 }); // إضافة منتج جديد مع صورة المنتج
        }
        updateCartTable(); // تحديث الجدول
        updateCartCount(); // تحديث العدد
    }

    // زيادة الكمية
    document.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('increase-quantity')) {
            const cartItem = target.closest('tr');
            const id = parseInt(cartItem.dataset.id);
            const item = cart.find(item => item.id === id);
            if (item) {
                item.quantity += 1;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartTable(); // تحديث الجدول
            }
        }
    });

    // تقليل الكمية
    document.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('decrease-quantity')) {
            const cartItem = target.closest('tr');
            const id = parseInt(cartItem.dataset.id);
            const item = cart.find(item => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartTable(); // تحديث الجدول
            }
        }
    });

    // حذف المنتج
    document.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('remove-item')) {
            const cartItem = target.closest('tr');
            const id = parseInt(cartItem.dataset.id);

            cart = cart.filter(item => item.id !== id); // إزالة العنصر من السلة
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartTable(); // تحديث الجدول
            updateCartCount(); // تحديث العدد
        }
    });

    // استعراض المنتجات عند تحميل الصفحة
    updateCartTable();
    updateCartCount();
});
