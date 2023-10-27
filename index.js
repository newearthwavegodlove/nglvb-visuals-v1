document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");
    const mainContent = document.getElementById("mainContent"); // New line

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (passwordInput.value === '1752') {
            form.style.display = "none"; // Hide the form
            message.textContent = "Mycelium neuron computer is HERE NOW";
            message.style.opacity = "1";
            
            mainContent.style.display = "block"; // Show the main content

            setTimeout(function() {
                message.style.background = "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)";
                message.style.color = "transparent";
                message.style.webkitBackgroundClip = "text";
                message.style.backgroundClip = "text";
                message.style.opacity = "0";
            }, 5000);
        }
    });
});
