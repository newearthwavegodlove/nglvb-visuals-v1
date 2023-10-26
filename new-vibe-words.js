document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const popUpBox = document.getElementById('popUpBox');
    const newWordInput = document.getElementById('newWord');
    const definitionInput = document.getElementById('definition');
    const doneButton = document.getElementById('doneButton');
    const dictionary = document.getElementById('dictionary');
  
    addButton.addEventListener('click', () => {
      popUpBox.classList.remove('hidden');
    });
  
    doneButton.addEventListener('click', () => {
      const word = newWordInput.value;
      const definition = definitionInput.value;
      
      const newEntry = document.createElement('div');
      newEntry.innerHTML = `<strong>${word}:</strong> ${definition}`;
      dictionary.appendChild(newEntry);
  
      newWordInput.value = '';
      definitionInput.value = '';
  
      popUpBox.classList.add('hidden');
    });
  });
  