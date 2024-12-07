// Add interactive elements
document.querySelector('.title').addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.05)';
});

document.querySelector('.title').addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
});

// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(255, 255, 255, 0.1)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.transition = 'all 3s ease-in-out';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
        particle.style.opacity = '0';
    }, 100);

    setTimeout(() => {
        particle.remove();
    }, 3000);
}

setInterval(createParticle, 300);