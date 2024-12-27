function createGlitchEffect(element) {
    const originalText = element.textContent;
    const chars = '!<>-_\\/[]{}—=*^?#________';

    function glitch() {
        let iterations = 0;

        const interval = setInterval(() => {
            element.textContent = element.textContent
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');

            iterations += 1 / 3;

            if (iterations >= originalText.length) {
                clearInterval(interval);
                element.textContent = originalText;
            }
        }, 30);
    }

    return {
        start: () => setInterval(glitch, 5000),
        trigger: glitch
    };
}

class CorruptionElement {
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 50 + 20;
        this.maxSize = this.size * 1.5;
        this.growing = true;
        this.corruption = 0;
        this.lifespan = 0;
        this.maxLife = Math.random() * 200 + 100;
        this.color = `rgba(52, 152, 219, 0.2)`;
    }

    update() {
        if (this.growing) {
            this.size += 0.5;
            if (this.size >= this.maxSize) {
                this.growing = false;
            }
        } else {
            this.size -= 0.5;
        }

        this.corruption += 0.02;
        this.lifespan++;

        return this.lifespan < this.maxLife;
    }

    draw() {
        const segments = 8;
        const angleStep = (Math.PI * 2) / segments;

        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.corruption);

        this.ctx.beginPath();
        for (let i = 0; i < segments; i++) {
            const angle = i * angleStep;
            const distortion = Math.sin(this.corruption * 2 + i) * 10;
            const radius = this.size + distortion;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            if (i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.closePath();

        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.restore();
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(52, 152, 219, ${Math.random() * 0.5 + 0.5})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Setup canvas
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '-1';
document.querySelector('.particles').appendChild(canvas);

const ctx = canvas.getContext('2d');
let particles = [];
let corruptionElements = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Interactive elements
const portal = document.querySelector('.portal');
const homeButton = document.querySelector('.home-button');

// Portal interaction
portal.addEventListener('mouseover', () => {
    portal.style.transform = 'scale(1.1)';
});

portal.addEventListener('mouseout', () => {
    portal.style.transform = 'scale(1)';
});

portal.addEventListener('click', createParticles);

// Home button interaction
homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

// Particle creation
function createParticles() {
    const rect = portal.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(x, y));
    }
}

// Corruption elements
function spawnCorruptionElement() {
    if (corruptionElements.length < 10) {
        corruptionElements.push(new CorruptionElement(canvas));
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw corruption elements
    corruptionElements = corruptionElements.filter(element => {
        const isAlive = element.update();
        if (isAlive) {
            element.draw();
        }
        return isAlive;
    });

    // Update and draw particles
    particles = particles.filter(particle => {
        particle.update();
        particle.draw(ctx);
        return particle.size > 0.2;
    });

    requestAnimationFrame(animate);
}

// Start animations
animate();
setInterval(spawnCorruptionElement, 2000);

// Initialize glitch effect
const glitchText = document.querySelector('.glitch');
const glitchEffect = createGlitchEffect(glitchText);
glitchEffect.start();