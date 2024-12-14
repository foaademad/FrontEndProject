
      // Retrieve users from localStorage or initialize an empty array
  const usersStorage = localStorage.getItem("users");
  const users = usersStorage ? JSON.parse(usersStorage) : [];

  // Handle form submission
  $("#signinForm").on("submit", function (e) {
    e.preventDefault();

    const formData = {
      email: $("#email").val(),
      password: $("#password").val(),
    };

    // Find user in the array
    const matchedUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      // Store the current user in localStorage for session management
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));

      // Redirect to home page
      window.location.href = "home.html";
      window.history.forward();
    } else {
      // Show error message for invalid credentials
      $("#password").addClass("is-invalid");
      $("#password")
        .next(".invalid-feedback")
        .text("Email not found! Please sign up first");
    }
  });


      $(document).ready(function() {
        // Password visibility toggle
        $('.password-toggle').click(function() {
          const input = $(this).siblings('input');
          const icon = $(this).find('i');
          
          if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
          } else {
            input.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
          }
        });

        // Form validation
        $('#signinForm').on('submit', function(e) {
          e.preventDefault();
          
          let isValid = true;
          const form = $(this);
          const inputs = form.find('input:not([type="checkbox"])');
          
          // Remove all existing validation states
          inputs.removeClass('is-invalid');
          
          // Validate each input
          inputs.each(function() {
            const input = $(this);
            
            if (input.prop('required') && !input.val()) {
              input.addClass('is-invalid');
              isValid = false;
            }
            
            // Email validation
            if (input.attr('type') === 'email') {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(input.val())) {
                input.addClass('is-invalid');
                isValid = false;
              }
            }
          });
          
          if (isValid) {
            // Collect form data
            const formData = {
              email: $('#email').val(),
              password: $('#password').val(),
              rememberMe: $('#rememberMe').is(':checked')
            };
            
            // Here you would typically send the data to your server
            // console.log('Form data:', formData);
            // alert('Form submitted successfully!');
          }
        });
        
        // Clear invalid state on input
        $('input').on('input change', function() {
          $(this).removeClass('is-invalid');
        });
      });

// ========================================================
// login as admin 
document.getElementById('signinForm').addEventListener('submit', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
  
    // القيم الثابتة لتسجيل الدخول
    const adminEmail = 'admin';
    const adminPassword = 'admin';
  
    // الحصول على القيم المدخلة
    const enteredEmail = document.getElementById('email').value.trim();
    const enteredPassword = document.getElementById('password').value.trim();
  
    // التحقق من القيم
    if (enteredEmail === adminEmail && enteredPassword === adminPassword) {
      // إعادة التوجيه إلى صفحة لوحة التحكم
      window.location.href = '../AdminPanel.html'; // استبدل 'dashboard.html' برابط صفحة الداشبورد
    } else {
      // عرض رسالة خطأ
      const errorMessage = document.getElementById('error-message');
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Invalid email or password. Please try again.';
    }
  });
  