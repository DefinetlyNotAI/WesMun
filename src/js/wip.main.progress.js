export function initializeProgress() {
    const progressBar = document.querySelector('.progress-bar');
    const percentageText = document.querySelector('.percentage');
    let progress = 0;

    function updateProgress() {
        if (progress < 100) {
            progress += Math.random() * 2;
            progress = Math.min(progress, 100);

            progressBar.style.width = `${progress}%`;
            percentageText.textContent = `${Math.round(progress)}%`;

            if (progress < 100) {
                requestAnimationFrame(updateProgress);
            }
        }
    }

    updateProgress();
}