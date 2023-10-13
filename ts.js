document.addEventListener("DOMContentLoaded", () => {
  const splitButton = document.getElementById("splitButton");
  const inputText = document.getElementById("inputText");
  const output = document.getElementById("output");

  splitButton.addEventListener("click", () => {
    const text = inputText.value;
    const words = text.split(" ");
    const sections = [];
    let currentSection = "";

    words.forEach((word, index) => {
      if (currentSection.split(" ").length + 1 <= 1000) {
        currentSection += word + " ";
      } else {
        sections.push(currentSection);
        currentSection = word + " ";
      }

      if (index === words.length - 1) {
        sections.push(currentSection);  // Push the last remaining section
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
          card.classList.toggle("glow");  // Add or remove the glow effect
        });
      });

      output.appendChild(card);
    });
  });
});
