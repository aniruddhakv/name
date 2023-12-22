document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let userData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    // Save data to localStorage (this is not secure for sensitive data like passwords)
    localStorage.setItem('userData', JSON.stringify(userData));

    // You can also send data to a backend server here using AJAX if you have one.
    // For simplicity, we're just saving it to localStorage.
});

// On index.html, retrieve and display the data
document.addEventListener('DOMContentLoaded', function() {
    let storedData = localStorage.getItem('userData');
    if (storedData) {
        let userData = JSON.parse(storedData);
        document.getElementById('userData').innerHTML = `
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
        `;
    }
});
