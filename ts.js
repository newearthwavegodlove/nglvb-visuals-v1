document.addEventListener("DOMContentLoaded", () => {
  const splitButton = document.getElementById("splitButton");
  const inputText = document.getElementById("inputText");
  const output = document.getElementById("output");
  let customWordCount = 1000;

  const wordCountButtons = document.querySelectorAll(".wordCountBtn");
  
  function updateSections() {
    let text = inputText.value;

    // New Code: Remove newline characters and replace multiple spaces with single space
    text = text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();

    const words = text.split(" ");
    const sections = [];  // Initialize sections
    let currentSection = "";  // Initialize currentSection

    words.forEach((word, index) => {
      if (currentSection.split(" ").length + 1 <= customWordCount) {
        currentSection += word + " ";
      } else {
        sections.push(currentSection);
        currentSection = word + " ";
      }

      if (index === words.length - 1) {
        sections.push(currentSection);
      }
    });

    output.innerHTML = "";
    sections.forEach((section, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<strong>Section ${index + 1}:</strong><p class="copyText">${section}</p>`;
      
      const copyText = card.querySelector('.copyText');
      copyText.addEventListener('click', () => {
        navigator.clipboard.writeText(section).then(() => {
          card.classList.toggle("glow");
        });
      });

      output.appendChild(card);
    });
  }

  wordCountButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      customWordCount = parseInt(e.target.getAttribute("data-wordcount"));
      wordCountButtons.forEach(btn => btn.classList.remove("activeBtn"));
      e.target.classList.add("activeBtn");
      updateSections();
    });
  });

  splitButton.addEventListener("click", updateSections);
});
