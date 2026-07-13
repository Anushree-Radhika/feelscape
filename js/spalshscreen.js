const title = document.getElementById('title');
const audio = document.getElementById('introAudio');

function startExperience() {
  // Start zoom-out animation
  title.classList.add('animate');

  // After zoom-out finishes, start pulsing glow
  title.addEventListener('animationend', () => {
    title.classList.add('pulse');
  }, { once: true });

  // Play intro audio (may require click in some browsers if autoplay is blocked)
  audio.currentTime = 0;
  audio.play().catch(err => {
    console.warn("Autoplay blocked. User interaction required to play audio.");
  });
}

// Run automatically when the page is fully loaded
window.addEventListener('load', startExperience);

