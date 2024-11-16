// Event Listener that runs when DOM content is loaded (This is from materializecss)
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    const languageEl = document.getElementById("language-button");
    // Scans for document with any element with .sidenav, render it on the right side.
    // Create an array of instances, this is created by the .init method from materializecss
    var instances = M.Sidenav.init(elems, { edge: "right" }); 
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents form submission

// Clears previous error messages
    clearErrors();

// Collects trimmed form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

// Form validation
    let hasError = false;
    if (name === '') {
        showError('nameError', 'Name is required');
        hasError = true;
    } 
    if (email === '') {
        showError('emailError', 'Email is required.');
        hasError = true;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Enter a valid email address.');
        hasError = true;
    } 
    if (subject === '') {
        showError('subjectError', 'Subject is required.');
        hasError = true;
    }
    if (message === '') {
        showError('messageError', 'Message is required');
        hasError = true;
    }

    // Success message for no errors
    if (!hasError) {
        document.getElementById('successMessage').innerText = 'Thank you for contacting us. We will get back to you soon!';
        document.getElementById('contactForm').reset();
    }
});

//Displays error message
function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

// Clears error messages
function clearErrors() {
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('subjectError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('successMessage').innerText = '';
}

// Email format validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

