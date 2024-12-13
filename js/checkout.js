document.addEventListener("DOMContentLoaded", () => {
    const orderSummaryContainer = document.querySelector(".order-summary");
    const form = document.querySelector("form");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const countryInput = document.getElementById("Country");
    const townInput = document.getElementById("Town");
    const phoneInput = document.getElementById("Phone");
    const emailInput = document.getElementById("email");
    const notesInput = document.getElementById("notes");
    const saveButton = document.querySelector(".Save");

    // Retrieve cart data and total price from localStorage
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const totalBooksPrice = parseFloat(localStorage.getItem("totalBooksPrice")) || 0;

    // Display cart data in the order summary section
    const displayCartData = () => {
        // استرجاع بيانات السلة من LocalStorage
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    
        // التحقق مما إذا كانت السلة تحتوي على منتجات
        if (cartData.length > 0) {
            let productRows = cartData.map(item => {
                // حساب السعر الإجمالي للمنتج بناءً على الكمية
                const totalPrice = item.price * item.quantity;
    
                return `
                    <div class="d-flex justify-content-between">
                        <span>${item.title} (x${item.quantity})</span>
                        <span>$${totalPrice.toFixed(2)}</span>
                    </div>
                    <hr>
                `;
            }).join("");
    
            const orderSummaryHTML = `
                <div class="d-flex justify-content-between">
                    <span><b>Product</b></span>
                    <span><b>Subtotal</b></span>
                </div>
                <hr>
                ${productRows}
                <div class="d-flex justify-content-between">
                    <span><b>Shipping</b></span>
                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="shipping" id="freeShipping" value="0" checked>
                            <label class="form-check-label" for="freeShipping">Free Shipping</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="shipping" id="localShipping" value="15">
                            <label class="form-check-label" for="localShipping">Local: $15.00</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="shipping" id="flatRate" value="10">
                            <label class="form-check-label" for="flatRate">Flat Rate: $10.00</label>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between total-section">
                    <span>Total</span>
                    <span id="totalAmount">$${calculateTotal(cartData).toFixed(2)}</span>
                </div>
            `;
            orderSummaryContainer.innerHTML = orderSummaryHTML;
    
            // إضافة مستمعي الأحداث لخيارات الشحن
            document.querySelectorAll('input[name="shipping"]').forEach(radio => {
                radio.addEventListener("change", updateTotalWithShipping);
            });
    
            updateTotalWithShipping(); // تحديث المجموع عند تحميل الصفحة
        } else {
            orderSummaryContainer.innerHTML = `
                <div class="alert alert-warning">Your cart is empty. Please add books to your cart before checking out.</div>
            `;
        }
    
        // عرض إجمالي السلة
        const cartTotalContainer = document.querySelector('.cart-total-container');
        if (cartData.length > 0) {
            const totalBill = calculateTotal(cartData); // استخدام الدالة لحساب إجمالي المنتجات
            const shippingCost = getSelectedShippingCost(); // الحصول على تكلفة الشحن بناءً على الخيار المحدد
            const totalAmount = totalBill + shippingCost;
    
            cartTotalContainer.innerHTML = `
                <div class="col-lg-4 my-20">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center border-bottom">Cart Total</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Total Bill
                                    <span class="cart-total-bill">$${totalBill.toFixed(2)}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Shipping
                                    <span class="cart-shipping">$${shippingCost.toFixed(2)}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div><strong>Total amount</strong></div>
                                    <span class="cart-total-amount"><strong>$${totalAmount.toFixed(2)}</strong></span>
                                </li>
                            </ul>
                            <button type="button" class="btn-primary-custom">
                                <a href="checkout.html">Go to checkout</a>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            cartTotalContainer.innerHTML = `
                <div class="alert alert-info">There are no books to display in the cart.</div>
            `;
        }
    };
    
    // دالة لحساب إجمالي سعر المنتجات
    const calculateTotal = (cartData) => {
        return cartData.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };
    
    // دالة للحصول على تكلفة الشحن بناءً على الخيار المحدد
    const getSelectedShippingCost = () => {
        const selectedShipping = document.querySelector('input[name="shipping"]:checked');
        return selectedShipping ? parseFloat(selectedShipping.value) : 0;
    };
    
    // دالة لتحديث المجموع الكلي عند تغيير خيار الشحن
    const updateTotalWithShipping = () => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const totalBill = calculateTotal(cartData);
        const shippingCost = getSelectedShippingCost();
        const totalAmount = totalBill + shippingCost;
    
        // تحديث المجموع الكلي في واجهة المستخدم
        document.querySelector('#totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
    };
    
    

    // Validation functions
    const validateLettersOnly = (input, errorMessage) => {
        const regex = /^[a-zA-Z\s]{2,}$/;
        if (!regex.test(input.value.trim())) {
            input.classList.add("is-invalid");
            input.nextElementSibling.textContent = errorMessage;
            return false;
        } else {
            input.classList.remove("is-invalid");
            input.nextElementSibling.textContent = "";
            return true;
        }
    };

    const validatePhone = (input, errorMessage) => {
        const regex = /^\d{11}$/;
        if (!regex.test(input.value.trim())) {
            input.classList.add("is-invalid");
            input.nextElementSibling.textContent = errorMessage;
            return false;
        } else {
            input.classList.remove("is-invalid");
            input.nextElementSibling.textContent = "";
            return true;
        }
    };

    const validateNotEmpty = (input, errorMessage) => {
        if (!input.value.trim()) {
            input.classList.add("is-invalid");
            input.nextElementSibling.textContent = errorMessage;
            return false;
        } else {
            input.classList.remove("is-invalid");
            input.nextElementSibling.textContent = "";
            return true;
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateRadioSelection = (radioGroup, errorMessage) => {
        const container = radioGroup[0]?.closest(".form-check-group");
        if (!radioGroup.some(radio => radio.checked)) {
            if (container) container.classList.add("is-invalid");
            alert(errorMessage);
            return false;
        }
        if (container) container.classList.remove("is-invalid");
        return true;
    };

    // Display saved billing details
    const displayBillingDetails = (details) => {
        let billingDetailsContainer = document.querySelector(".billing-details-container");
        if (billingDetailsContainer) billingDetailsContainer.remove(); // Clear existing details

        billingDetailsContainer = document.createElement("div");
        billingDetailsContainer.classList.add("billing-details-container", "mt-5");
        billingDetailsContainer.innerHTML = `
            <h3>Saved Billing Information</h3>
            <ul class="list-group">
                <li class="list-group-item"><strong>First Name:</strong> ${details.firstName}</li>
                <li class="list-group-item"><strong>Last Name:</strong> ${details.lastName}</li>
                <li class="list-group-item"><strong>Country:</strong> ${details.country}</li>
                <li class="list-group-item"><strong>Town:</strong> ${details.town}</li>
                <li class="list-group-item"><strong>Phone:</strong> ${details.phone}</li>
                <li class="list-group-item"><strong>Email:</strong> ${details.email}</li>
                <li class="list-group-item"><strong>Shipping Method:</strong> ${details.shippingMethod}</li>
                <li class="list-group-item"><strong>Payment Method:</strong> ${details.paymentMethod}</li>
                <li class="list-group-item"><strong>Notes:</strong> ${details.notes || "None"}</li>
            </ul>
        `;
        document.body.appendChild(billingDetailsContainer);
    };

    // Save billing details on form submission
    saveButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission

        // Validate inputs
        let isValid = true;
        isValid &= validateLettersOnly(firstNameInput, "First Name must contain only letters and be at least 2 characters long.");
        isValid &= validateLettersOnly(lastNameInput, "Last Name must contain only letters and be at least 2 characters long.");
        isValid &= validateLettersOnly(countryInput, "Country must contain only letters and be at least 2 characters long.");
        isValid &= validateLettersOnly(townInput, "Town must contain only letters and be at least 2 characters long.");
        isValid &= validatePhone(phoneInput, "Phone number must contain exactly 11 digits.");
        if (!validateNotEmpty(emailInput, "Email Address is required") || !validateEmail(emailInput.value)) {
            emailInput.classList.add("is-invalid");
            emailInput.nextElementSibling.textContent = "Enter a valid email address.";
            isValid = false;
        }

        const shippingRadios = Array.from(document.querySelectorAll('input[name="shipping"]'));
        const paymentRadios = Array.from(document.querySelectorAll('input[name="payment"]'));
        isValid &= validateRadioSelection(shippingRadios, "Please select a shipping method.");
        isValid &= validateRadioSelection(paymentRadios, "Please select a payment method.");

        if (isValid) {
            // Collect billing details
            const billingDetails = {
                firstName: firstNameInput.value.trim(),
                lastName: lastNameInput.value.trim(),
                country: countryInput.value.trim(),
                town: townInput.value.trim(),
                phone: phoneInput.value.trim(),
                email: emailInput.value.trim(),
                notes: notesInput.value.trim(),
                shippingMethod: document.querySelector('input[name="shipping"]:checked').id,
                paymentMethod: document.querySelector('input[name="payment"]:checked').id,
            };

            // Save billing details to localStorage
            localStorage.setItem("billingDetails", JSON.stringify(billingDetails));

            // Show success message
            alert("Billing details saved successfully!");

            // Display billing details
            displayBillingDetails(billingDetails);

            // Optionally reset the form
            form.reset();
        }
    });

    // Initialize display
    displayCartData();
});
// ====================================================
// check out to show the book 

  document.querySelector(".Save").addEventListener("click", () => {
  // جلب البيانات من الفورم
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const country = document.getElementById("Country").value;
  const town = document.getElementById("Town").value;
  const phone = document.getElementById("Phone").value;
  const email = document.getElementById("email").value;

  // التحقق من إدخال جميع الحقول المطلوبة
  if (!firstName || !lastName || !country || !town || !phone || !email) {
    alert("Please fill out all required fields.");
    return;
  }

  // جلب الكتب من localStorage باستخدام المفتاح 'cart'
  const booksInCart = JSON.parse(localStorage.getItem("cart")) || [];

  // التحقق إذا لم تكن هناك كتب في السلة
  if (booksInCart.length === 0) {
    alert("No books in the cart. Please add books to proceed.");
    return;
  }

  // إنشاء بيانات الطلب
  const orderData = booksInCart.map(book => ({
    ...book,
    date: new Date().toISOString(),
    customer: { firstName, lastName, country, town, phone, email }
  }));

  // حفظ بيانات الطلب في localStorage
  const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
  orderHistory.push(...orderData);
  localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

  // حذف السلة بعد الحفظ
  localStorage.removeItem("cart");

  // توجيه المستخدم إلى صفحة تاريخ الطلبات
  window.location.href = "./userprofile.html";
});



// auto fill in form 
const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

// تعبئة الفورم بالبيانات من المستخدم
document.getElementById('firstName').value = currentUser.firstName || '';
document.getElementById('lastName').value = currentUser.lastName || '';
document.getElementById('email').value = currentUser.email || '';
document.getElementById('Phone').value = currentUser.phone || '';

// ترك الحقول الخاصة بالبلد والمدينة فارغة ليتم إدخالهم يدويًا
document.getElementById('Country').value = '';  // يتم تركه فارغًا
document.getElementById('Town').value = '';    // يتم تركه فارغًا
