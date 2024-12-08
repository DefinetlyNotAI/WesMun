window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingVideo = document.getElementById('loading-video');
    const hasSeenLoading = getCookie('hasSeenLoading');

    if (!hasSeenLoading) {
        loadingScreen.style.display = 'flex';
        loadingVideo.play();
        setCookie('hasSeenLoading', 'true', 1); // Set cookie to expire in 1 day

        setTimeout(function () {
            loadingScreen.classList.add('fade-out');
        }, 4000); // Fade out loading screen after 4 seconds
    } else {
        loadingScreen.style.display = 'none';
    }

    loadingVideo.addEventListener('ended', function () {
        loadingScreen.classList.add('fade-out');
    });
});

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}