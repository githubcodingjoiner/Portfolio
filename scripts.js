// scripts.js

// Set dark mode as the default mode when the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Ensure the body starts in dark mode by default
    document.body.classList.add("dark-mode");
});

// Toggle between light mode and dark mode
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

// Form validation (if contact form exists in the HTML)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
    });
}
