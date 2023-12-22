
let users = [];


document.getElementById('signupButton').addEventListener('click', function() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Check if username already exists
    if (users.find(user => user.username === newUsername)) {
        alert('Username already exists. Please choose another.');
        return;
    }

    users.push({ username: newUsername, password: newPassword });
    alert('Successfully signed up!');
});


document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert('Successfully logged in!');
        
        // Redirect to the details page after successful login
        window.location.href = 'details.html';
    } else {
        alert('Wrong username or password. Please try again.');
    }
    document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert('Successfully logged in!');
        
        // Redirect to the details page or any other page
        window.location.href = 'details.html';
    } else {
        alert('Wrong username or password. Please try again.');
    }
});

});
