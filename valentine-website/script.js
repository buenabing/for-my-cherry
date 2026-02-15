// 1. Initialize Relationship Counter
const startDate = new Date('2025-08-30');
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById('day-counter').innerText = diffDays;

// 2. Envelope Interaction
function openLetter() {
    const envelope = document.getElementById('envelope-wrapper');
    const letter = document.getElementById('letter-paper');
    
    envelope.style.transition = 'opacity 0.5s';
    envelope.style.opacity = '0';
    
    setTimeout(() => {
        envelope.style.display = 'none';
        letter.style.display = 'block';
        letter.style.opacity = '0';
        // Fade in letter
        setTimeout(() => {
            letter.style.transition = 'opacity 1s, transform 1s';
            letter.style.opacity = '1';
            letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);
    }, 500);
}

// 3. Create Stars
const starsContainer = document.getElementById('stars-container');
const starCount = 100;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    star.style.animationDelay = Math.random() * 5 + 's';
    starsContainer.appendChild(star);
}

// 4. Falling Hearts Animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-fall';
    heart.innerHTML = '♥';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
    heart.style.opacity = (Math.random() * 0.4 + 0.3);
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's'; // 6-10 seconds
    
    document.getElementById('hearts-container').appendChild(heart);
    
    // Clean up heart after it finishes falling
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Start heart snow
setInterval(createHeart, 400);