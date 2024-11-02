// script.js

// Select the form and message elements
const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate inputs
    if (username === '' || email === '' || password === '') {
        message.textContent = 'Please fill in all fields.';
        message.style.color = 'red';
        return;
    }

    // Simulate successful registration
    message.textContent = `Thank you for registering, ${username}!`;
    message.style.color = 'green';

    // Here, you can send data to a backend server using fetch or AJAX
    // For now, we're just simulating the process
    console.log({ username, email, password });
});
