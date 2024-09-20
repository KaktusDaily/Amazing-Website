// Add a click event to the "Click Me!" button
document.getElementById('cta-button').addEventListener('click', function() {
    alert('You clicked the button! Cool, right?');
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert('Thanks for submitting the form!');
        // You can add more advanced form handling here (e.g., send data to a server)
    } else {
        alert('Please fill out all fields.');
    }
});
