// script.js
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('loginPhone').value.trim();
    if (phone === '9999999999') {
      window.location.href = '/dashboard.html';
    } else {
      alert('Invalid phone number for demo login.');
    }
  });

  // Toggle between login and register forms
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const switchToRegister = document.getElementById('switchToRegister');

  if (loginBtn && registerBtn && loginForm && registerForm) {
    loginBtn.onclick = function() {
      loginBtn.classList.add('active');
      registerBtn.classList.remove('active');
      loginForm.classList.add('active');
      registerForm.classList.remove('active');
    };
    registerBtn.onclick = function() {
      registerBtn.classList.add('active');
      loginBtn.classList.remove('active');
      registerForm.classList.add('active');
      loginForm.classList.remove('active');
    };
    if (switchToRegister) {
      switchToRegister.onclick = function() {
        registerBtn.click();
      };
    }
  }
});