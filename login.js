document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const user = JSON.parse(localStorage.getItem('alsagramUser'));
  
    if (user && email === user.email && password === user.password) {
      alert("Login successful!");
      window.location.href = "home.html";
    } else {
      alert("Invalid credentials.");
    }
  });
  