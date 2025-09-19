document.getElementById('hospitalLoginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('hospitalId').value.trim();
  const otp = document.getElementById('hospitalOtp').value.trim();
  if (id === 'hospital123' && otp === '999999') {
    window.location.href = 'hospital-dashboard.html';
  } else {
    alert('Invalid credentials for demo login.');
  }
});
