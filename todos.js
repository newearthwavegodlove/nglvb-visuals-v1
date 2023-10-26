document.addEventListener('DOMContentLoaded', () => {
    const firstText = document.getElementById('first-text');
    const secondText = document.getElementById('second-text');
    const waveButton = document.getElementById('wave-button');
    const waveAudio = document.getElementById('wave-audio');
    const hopeImage = document.getElementById('hope-image');
  
    firstText.animate([
      { fontSize: '1px', opacity: 0 },
      { fontSize: '48px', opacity: 1 },
      { fontSize: '1px', opacity: 0 }
    ], { duration: 3000 }).onfinish = () => {
      secondText.animate([
        { fontSize: '1px', opacity: 0 },
        { fontSize: '48px', opacity: 1 }
      ], { duration: 1500 }).onfinish = () => {
        waveButton.classList.remove('hidden');
      };
    };
  
waveButton.addEventListener('click', () => {
  waveButton.classList.add('hidden');
  waveAudio.play();
  hopeImage.classList.remove('hidden');
  const anim = hopeImage.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], { duration: 3000 });
  
  anim.onfinish = () => {
    hopeImage.style.opacity = '1';
  };
});
    

    const languages = [
        ['New', 'Earth', 'Wave'],
        ['Mới', 'Trái đất', 'Sóng'],
        ['新', '地球', '浪潮'],
        ['新', '地球', '浪潮'],
        ['ใหม่', 'โลก', 'คลื่น'],
        ['नया', 'पृथ्वी', 'लहर'],
        ['নতুন', 'পৃথিবী', 'তরঙ্গ'],
        ['新', '地球', '浪潮'],
        ['جديد', 'أرض', 'موجة'],
        ['Baru', 'Bumi', 'Gelombang'],
        ['ថ្មី', 'ផែនដី', 'កង្វះ'],
        ['གསར་པ་', 'ས་གཞི་', 'རྒྱུ་མཚོན།'],
        ['ໃຫມ່', 'ໂລກ', 'ຢຽງ'],
        ['Bago', 'Lupa', 'Alon'],
        ['新しい', '地球', '波'],
        ['새로운', '지구', '파도']
    ];


    
    
    // Initial update
    updateText();    
      let langIndex = 0;
      
      function displayLanguage() {
        const leftText = document.getElementById('left-text');
        const rightText = document.getElementById('right-text');
      
        leftText.textContent = languages[langIndex].join('\n');
        rightText.textContent = languages[langIndex].join('\n');
      
        const fadeIn = [
          { opacity: 0 },
          { opacity: 1 }
        ];
      
        const fadeOut = [
          { opacity: 1 },
          { opacity: 0 }
        ];
      
        leftText.classList.remove('hidden');
        rightText.classList.remove('hidden');
      
        let anim1 = leftText.animate(fadeIn, { duration: 4000 });
        let anim2 = rightText.animate(fadeIn, { duration: 4000 });
      
        anim1.onfinish = () => {
          leftText.animate(fadeOut, { duration: 3000 });
        };
      
        anim2.onfinish = () => {
          rightText.animate(fadeOut, { duration: 3000 }).onfinish = () => {
            langIndex = (langIndex + 1) % languages.length;
            displayLanguage();
          };
        };
      }
      
      waveButton.addEventListener('click', () => {
        waveButton.classList.add('hidden');
        waveAudio.play();
        hopeImage.classList.remove('hidden');
        const anim = hopeImage.animate([
          { opacity: 0 },
          { opacity: 1 }
        ], { duration: 3000 });
        
        anim.onfinish = () => {
          hopeImage.style.opacity = '1';
          displayLanguage();
        };
      });
});