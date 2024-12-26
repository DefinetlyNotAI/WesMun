document.addEventListener('DOMContentLoaded', function () {
    const licensePopup = document.getElementById('licensePopup');
    const licensePopupMinimized = document.getElementById('licensePopupMinimized');
    const licenseText = document.getElementById('licenseText');
    const acceptCheckbox = document.getElementById('acceptCheckbox');
    const acceptButton = document.getElementById('acceptButton');
    const autoAcceptNotification = document.getElementById('autoAcceptNotification');
    let autoAcceptTimeout;

    // Check if the license has already been accepted
    if (document.cookie.split(';').some((item) => item.trim().startsWith('licenseAccepted='))) {
        licensePopupMinimized.style.display = 'none';
        return;
    }

    // Fetch the license text from converted.license.html
    fetch('https://definetlynotai.github.io/WesMun/converted.license')
        .then(response => response.text())
        .then(text => {
            licenseText.innerHTML = text;
            licensePopupMinimized.style.display = 'flex';

            // Start auto-accept timer (30 seconds)
            autoAcceptTimeout = setTimeout(() => {
                document.cookie = "licenseAccepted=true; max-age=" + 60 * 60 * 24 * 365; // 1 year
                licensePopupMinimized.style.display = 'none';

                // Show notification and fade it away (10 seconds)
                autoAcceptNotification.style.display = 'block';
                setTimeout(() => {
                    autoAcceptNotification.style.opacity = '1';
                    autoAcceptNotification.style.transition = 'opacity 1s';
                    autoAcceptNotification.style.opacity = '0';
                    setTimeout(() => autoAcceptNotification.style.display = 'none', 1000);
                }, 10000); // 10,000ms = 10 seconds
            }, 30000); // 30,000ms = 30 seconds
        });

    // Expand popup when minimized widget is clicked
    licensePopupMinimized.addEventListener('click', function () {
        licensePopup.style.display = 'flex';
        licensePopupMinimized.style.display = 'none';

        // Cancel auto-accept timer
        clearTimeout(autoAcceptTimeout);
    });

    // Handle checkbox change to enable/disable the button
    acceptCheckbox.addEventListener('change', function () {
        acceptButton.disabled = !this.checked;
    });

    // Handle accept button click
    acceptButton.addEventListener('click', function () {
        document.cookie = "licenseAccepted=true; max-age=" + 60 * 60 * 24 * 365; // 1 year
        licensePopup.style.display = 'none';
    });
});
