// Select main elements
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Switch between login and register views
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Select login and registration forms
const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

// ===== Login Form Validation =====
loginForm.addEventListener('submit', (e) => {
    const username = loginForm.querySelector('input[type="text"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();

    if (username === '' || password === '') {
        e.preventDefault();
        alert('⚠️ Please enter both username and password to login.');
    }
});

// ===== Registration Form Validation =====
registerForm.addEventListener('submit', (e) => {
    const username = registerForm.querySelector('input[type="text"]').value.trim();
    const email = registerForm.querySelector('input[type="email"]').value.trim();
    const password = registerForm.querySelectorAll('input[type="password"]')[0].value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const dob = document.getElementById('regDOB').value;
    const securityAnswer = document.getElementById('regSecurityAnswer').value.trim();
    const termsChecked = document.getElementById('regTerms').checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate that no field is empty
    if (
        username === '' ||
        email === '' ||
        password === '' ||
        phone === '' ||
        dob === '' ||
        securityAnswer === ''
    ) {
        e.preventDefault();
        alert('⚠️ All fields are required.');
        return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('⚠️ Please enter a valid email address.');
        return;
    }

    // Validate phone number (digits only, minimum 10 digits)
    if (phone.length < 10 || !/^\d+$/.test(phone)) {
        e.preventDefault();
        alert('⚠️ Please enter a valid phone number with at least 10 digits.');
        return;
    }

    // Validate DOB (must be in the past)
    const today = new Date();
    const birthDate = new Date(dob);
    if (birthDate >= today) {
        e.preventDefault();
        alert('⚠️ Please enter a valid date of birth.');
        return;
    }

    // Validate Terms & Conditions checkbox
    if (!termsChecked) {
        e.preventDefault();
        alert('⚠️ You must agree to the Terms and Conditions.');
        return;
    }

    // ✅ All validations passed
    console.log('✅ Registration form is valid. Submitting...');
});
