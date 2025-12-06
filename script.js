document.addEventListener('DOMContentLoaded', (event) => {
    
    const music = document.getElementById('background-music');
    const musicStarterButton = document.getElementById('music-starter');
    
    music.play().catch(error => {
        musicStarterButton.style.display = 'block';

        musicStarterButton.addEventListener('click', () => {
            music.play();
            musicStarterButton.style.display = 'none';
        });
    });

    const textElement = document.getElementById('typewriter-text');
    
    const phrases = [
        "Content Creator...",
        "Moderator for Flasnap, Loaya and more...",
        "Playing Minecraft...",
        "Mon pseudo est Kawail_fps"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let erasingSpeed = 50;
    let delayBeforeErase = 1500;

    function typeWriterEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = delayBeforeErase;
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 100;
        }

        const speed = isDeleting ? erasingSpeed : typingSpeed;
        setTimeout(typeWriterEffect, speed);
    }

    typeWriterEffect();
});
