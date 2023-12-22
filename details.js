let userDetails = {};

document.getElementById('saveDetailsButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const location = document.getElementById('location').value;

    userDetails = {
        name: name,
        type: type,
        location: location
    };

    alert('Details saved successfully!'); // You can replace this with a redirect or other action
});

// Example function to access saved details
function getUserDetails() {
    return userDetails;
}
