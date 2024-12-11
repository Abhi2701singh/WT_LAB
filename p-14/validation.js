function validateForm() {
    // Reset all error messages
    clearErrors();
    
    let isValid = true;
    
    // Username validation
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        showError('usernameError', 'Username must be at least 3 characters long');
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        showError('phoneError', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        showError('passwordError', 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errorElements = document.getElementsByClassName('error');
    for (let element of errorElements) {
        element.textContent = '';
    }
}

// Real-time validation
document.getElementById('username').addEventListener('input', function() {
    if (this.value.length >= 3) {
        showError('usernameError', '');
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(this.value)) {
        showError('emailError', '');
    }
});

document.getElementById('phone').addEventListener('input', function() {
    const phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(this.value)) {
        showError('phoneError', '');
    }
});

document.getElementById('password').addEventListener('input', function() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(this.value)) {
        showError('passwordError', '');
    }
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    if (this.value === document.getElementById('password').value) {
        showError('confirmPasswordError', '');
    }
}); 