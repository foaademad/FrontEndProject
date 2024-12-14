document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('productTableBody');
    let products = JSON.parse(localStorage.getItem('products')) || [];
    
    // إعادة تحميل الجدول بعد تعديل أو إضافة منتج
    function reloadTable() {
        tableBody.innerHTML = ''; // مسح الجدول الحالي
        products.forEach((product, index) => {
            const tableRow = document.createElement('tr');
            tableRow.dataset.index = index;

            tableRow.innerHTML = `
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.author}</td>
                <td>$${product.price}</td>
                <td>${product.category}</td>
                <td>
                    <img src="${product.image || 'src/images/default-image.png'}" alt="Product Image" style="width: 50px; height: 50px;">
                    <img src="${product.image2 || 'src/images/default-image.png'}" alt="Product Back Image" style="width: 50px; height: 50px;">
                </td>
                <td>${product.status}</td>
                <td>${product.pages}</td>
                <td>
                    <img src="src/images/trash.png" class="buttonDelete" onclick="deleteProduct(${index})" style="cursor: pointer;">
                    <img src="src/images/edit.png" class="buttonEdit" onclick="openEditModal(${index})" style="cursor: pointer;">
                </td>
            `;
            tableBody.appendChild(tableRow);
        });
    }

    // إعادة تحميل الجدول عند تحميل الصفحة
    reloadTable();

    // التعامل مع إضافة أو تعديل منتج
    document.getElementById('addProductForm').addEventListener('submit', function (event) {
        event.preventDefault();

        if (!validateInputs()) {
            return; // إيقاف التنفيذ إذا كانت المدخلات غير صحيحة
        }

        const productTitle = document.getElementById('productTitle').value;
        const productAuthor = document.getElementById('productAuthor').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const productCategory = document.getElementById('productCategory').value;
        const productImage = document.getElementById('productImage').value || 'src/images/default-image.png';
        const productImage2 = document.getElementById('productImage2').value || 'src/images/default-image.png';
        const productStatus = document.getElementById('productStatus').value;
        const productPages = parseInt(document.getElementById('productPages').value);

        // إذا كان editIndex موجودًا يعني أنه يجب تعديل المنتج الحالي
        if (editIndex !== null) {
            products[editIndex] = {
                id: products[editIndex].id, // الحفاظ على نفس ID المنتج
                title: productTitle,
                author: productAuthor,
                price: productPrice,
                category: productCategory,
                image: productImage,
                image2: productImage2,
                status: productStatus,
                pages: productPages
            };
            editIndex = null; // إعادة تعيين editIndex بعد التعديل
            alert('Product has been updated successfully.');
        } else {
            // إذا لم يكن editIndex موجودًا، نقوم بإضافة منتج جديد
            const newId = products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;

            const newProduct = {
                id: newId,
                title: productTitle,
                author: productAuthor,
                price: productPrice,
                category: productCategory,
                image: productImage,
                image2: productImage2,
                status: productStatus,
                pages: productPages
            };

            products.push(newProduct);
            // alert('Product has been added successfully.');
        }

        localStorage.setItem('products', JSON.stringify(products));

        // إغلاق نافذة الإضافة أو التعديل وإعادة تحميل الجدول
        document.getElementById('addProductForm').reset();
        const addProductModal = new bootstrap.Modal(document.getElementById('addProductModal'));
        addProductModal.hide();
        reloadTable();
    });

    // التحقق من المدخلات
    function validateInputs() {
        const title = document.getElementById('productTitle').value.trim();
        const author = document.getElementById('productAuthor').value.trim();
        const price = document.getElementById('productPrice').value.trim();
        const category = document.getElementById('productCategory').value.trim();
        const pages = document.getElementById('productPages').value.trim();

        if (!title || !author || !price || !category || !pages) {
            alert('Please fill in all the fields.');
            return false;
        }

        if (isNaN(price) || price <= 0) {
            alert('Price must be a valid positive number.');
            return false;
        }

        if (isNaN(pages) || pages <= 0) {
            alert('Pages must be a valid positive number.');
            return false;
        }

        return true;
    }

    // متغير لتخزين المنتج الذي سيتم تعديله
    let editIndex = null;

    window.openEditModal = function (index) {
        const product = products[index];

        // تعبئة النموذج بالبيانات الحالية للمنتج
        document.getElementById('productTitle').value = product.title;
        document.getElementById('productAuthor').value = product.author;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productImage').value = product.image;
        document.getElementById('productImage2').value = product.image2;
        document.getElementById('productStatus').value = product.status;
        document.getElementById('productPages').value = product.pages;

        // تخزين المؤشر لتعديل المنتج الحالي
        editIndex = index;

        // فتح نافذة التعديل
        const addProductModal = new bootstrap.Modal(document.getElementById('addProductModal'));
        addProductModal.show();
    };

    // حذف منتج
    window.deleteProduct = function (index) {
        if (confirm('Are you sure you want to delete this product?')) {
            products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(products));
            reloadTable();
        }
    };
    // إغلاق نافذة الفورم
const addProductModal = new bootstrap.Modal(document.getElementById('addProductModal'));
addProductModal.hide();

});
