// Sample user credentials (in a real application, this would be handled server-side)
const validCredentials = {
    username: "admin",
    password: "password123"
};

function validateForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Check if credentials match
    if (username === validCredentials.username && password === validCredentials.password) {
        // Successful login
        errorMessage.style.display = 'none';
        alert('Login successful!');
        // Here you would typically redirect to another page or perform other actions
        // window.location.href = 'dashboard.html';
    } else {
        // Failed login
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid username or password';
    }
} 