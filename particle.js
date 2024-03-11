// Define neo noir colors
const neoNoirColors = ['#7a7a7a', '#b3b3b3', '#f0f0f0', '#33ff00', '#00ffcc', '#cc00ff', '#ff6600', '#ff3300'];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const startX = random(0, window.innerWidth);
  const startY = random(0, window.innerHeight);

  const randomColor = neoNoirColors[Math.floor(random(0, neoNoirColors.length))];

  particle.style.left = startX + 'px';
  particle.style.top = startY + 'px';
  particle.style.backgroundColor = randomColor;

  document.querySelector('.container').appendChild(particle);
}


function animateParticles(timestamp) {
  const particles = document.querySelectorAll('.particle');

  particles.forEach(function(particle) {
    if (Math.random() < 0.02) { 
      const dx = random(-1, 0.5); 
      const dy = random(1, 0.5); 

      particle.setAttribute('data-dx', dx);
      particle.setAttribute('data-dy', dy);
    }

    let dx = parseFloat(particle.getAttribute('data-dx'));
    let dy = parseFloat(particle.getAttribute('data-dy'));

    let x = parseFloat(particle.style.left);
    let y = parseFloat(particle.style.top);

    x += dx;
    y += dy;

    // Reset position if particle goes out of viewport
    if (x < 0 || x > window.innerWidth || y < 0 || y > window.innerHeight) {
      particle.style.left = random(0, window.innerWidth) + 'px';
      particle.style.top = random(0, window.innerHeight) + 'px';
    } else {
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
    }
  });

  // Call requestAnimationFrame for the next frame
  requestAnimationFrame(animateParticles);
}


for (let i = 0; i < 50; i++) {
  createParticle();
}

requestAnimationFrame(animateParticles);





