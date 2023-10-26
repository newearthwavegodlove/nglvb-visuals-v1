document.addEventListener('DOMContentLoaded', () => {
    const firstText = document.getElementById('first-text');
    const secondText = document.getElementById('second-text');
    const waveButton = document.getElementById('wave-button');
    const waveAudio = document.getElementById('wave-audio');
  
    // Animate first text
    firstText.animate([
      {fontSize: '1px', opacity: 0},
      {fontSize: '48px', opacity: 1},
      {fontSize: '1px', opacity: 0},
    ], {
      duration: 3000
    }).onfinish = () => {
      // Animate second text
      secondText.animate([
        {fontSize: '1px', opacity: 0},
        {fontSize: '48px', opacity: 1}
      ], {
        duration: 1500
      }).onfinish = () => {
        // Show button
        waveButton.classList.remove('hidden');
      };
    };
  
    waveButton.addEventListener('click', () => {
      // Play audio
      waveAudio.play();
    });
  });
  
  const hopeImage = document.getElementById('hope-image');
  
  waveButton.addEventListener('click', () => {
    // Hide button
    waveButton.classList.add('hidden');
    
    // Play audio
    waveAudio.play();
    
    // Show image and fade it in
    hopeImage.classList.remove('hidden');
    hopeImage.animate([
      {opacity: 0},
      {opacity: 1}
    ], {
      duration: 3000
    });
  });
  