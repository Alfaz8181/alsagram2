document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const email    = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Save to localStorage
    const user = { username, email, password };
    localStorage.setItem('alsagramUser', JSON.stringify(user));
  
    alert("Signup successful! You can now login.");
    window.location.href = "login.html";
  });
  