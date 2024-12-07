import {initializeProgress} from './progress.js';
import {createShapes} from './shapes.js';

document.addEventListener('DOMContentLoaded', () => {
    createShapes();
    initializeProgress();
});