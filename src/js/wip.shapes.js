export function createShapes() {
    const container = document.querySelector('.geometric-shapes');
    const shapes = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shape.className = `shape ${shapes[i % shapes.length]} floating`;

        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(shape);
    }
}