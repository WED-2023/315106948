// Smooth scrolling for navigation
$(document).ready(function() {
    $("#menu").show(); // Make sure the menu is always visible when the page loads

    $(document).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#menu").fadeIn();
        } else {
            $("#menu").fadeIn(); // Keep it visible at the top
        }
    });
});

// Like button functionality
function likePage() {
    alert("Thanks for liking the page!");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let emoji = document.getElementById("emoji").value;

    // Format email content
    let emailSubject = "New Contact Form Submission";
    let emailBody = `Email: ${email}%0D%0A%0D%0AMessage: ${message} ${emoji}`;

    // Open email client
    window.location.href = `mailto:your-email@example.com?subject=${emailSubject}&body=${emailBody}`;
});