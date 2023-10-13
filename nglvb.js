$(document).ready(function() {
  // Typewriter effect
  let str = "Welcome to New God Love 🎉🎉";
  let i = 0;
  let speed = 100;
  function typeWriter() {
    if (i < str.length) {
      $("#welcomeText").append(str.charAt(i));
      i++;
      setTimeout(typeWriter, speed);
    } else {
      $("#inviteButton").show();
    }
  }
  typeWriter();

  // Click to open the invite
  $("#inviteButton").click(function() {
    $("#welcomeText").fadeOut();
    $("#inviteLetter").fadeIn();
  });

  // Click to learn more
  $("#learnMoreButton").click(function() {
    // Redirect or show more details here
  });
});
