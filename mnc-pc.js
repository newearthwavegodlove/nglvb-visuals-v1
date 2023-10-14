document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (passwordInput.value === '1752') {
            form.style.opacity = "0";  // Fade out the password form
            message.textContent = "Mycelium neuron computer is HERE NOW";
            message.style.opacity = "1";

            // Rainbow fade out after 5 seconds
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
const lyrics = [
    "Play",
    "Humming NEW MNC PC",
    "MNC PC",
    "Mycelium Neural Creative Currency Computer",
    "Heavenly Vibes God knows everything"
];

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");
    const lyricsDiv = document.getElementById("lyrics");
    const playButton = document.getElementById("playButton");
    let lyricsIndex = 0;

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (passwordInput.value === '1752') {
            form.style.opacity = "0";  // Fade out the password form
            
            // Show "Mycelium neuron computer is HERE NOW"
            message.textContent = "Mycelium neuron computer is HERE NOW";
            message.style.opacity = "1";

            setTimeout(function() {
                message.style.opacity = "0";  // Fade out the message

                // Show Play button
                setTimeout(function() {
                    playButton.style.opacity = "1";  // Make the Play button visible

                    playButton.addEventListener("click", function() {
                        playButton.style.opacity = "0";  // Fade out Play button

                        // Show Lyrics
                        const lyricsInterval = setInterval(function() {
                            if (lyricsIndex < lyrics.length) {
                                lyricsDiv.textContent += lyrics[lyricsIndex] + " ";
                                lyricsDiv.style.opacity = "1"; // Make lyrics visible
                                lyricsIndex++;
                            } else {
                                clearInterval(lyricsInterval);
                            }
                        }, 1000);
                    });

                }, 2000);  // 2 seconds after message fades out

            }, 5000);  // 5 seconds after message appears
        }
    });
});
