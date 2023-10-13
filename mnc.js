// Play startup sound

var audio = new Audio('compose_mnc.wav');

// Play audio on button click
document.getElementById("startButton").addEventListener('click', function() {
    audio.play();
    
    // Optionally, hide the button after it's clicked
    this.style.display = "none";
});


// Play the audio
audio.play();


// Show title, subtitle, and emoji

setTimeout(function () {
    document.getElementById("title").classList.add("visible");
}, 1000);

setTimeout(function () {
    document.getElementById("subtitle").classList.add("visible");
}, 3000);

setTimeout(function () {
    document.getElementById("emoji").classList.add("visible");
 }, 5000);


// New code for hiding title, subtitle, emoji and showing the new interface
document.getElementById("title").addEventListener("click", function() {
    fadeOut("title");
    fadeOut("subtitle");
    fadeOut("emoji");
    
    setTimeout(function () {
        document.getElementById("creation-interface").classList.add("visible");
    }, 2000);
});

function fadeOut(elementId) {
    document.getElementById(elementId).classList.remove("visible");
}
