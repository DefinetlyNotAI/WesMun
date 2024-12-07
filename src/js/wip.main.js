import {initializeProgress} from './wip.main.progress.js';
import {createShapes} from './wip.shapes.js';

document.addEventListener('DOMContentLoaded', () => {
    createShapes();
    initializeProgress();
});