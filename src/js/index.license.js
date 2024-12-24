document.addEventListener('DOMContentLoaded', function () {
    const licensePopup = document.getElementById('licensePopup');
    const licenseText = document.getElementById('licenseText');
    const acceptCheckbox = document.getElementById('acceptCheckbox');
    const acceptButton = document.getElementById('acceptButton');

    // Check if the license has already been accepted
    if (document.cookie.split(';').some((item) => item.trim().startsWith('licenseAccepted='))) {
        return;
    }

    // Fetch the license text from License.html
    fetch('../../License.html')
        .then(response => response.text())
        .then(text => {
            licenseText.innerHTML = (text);
            licensePopup.style.display = 'flex';
        });

    acceptCheckbox.addEventListener('change', function () {
        acceptButton.disabled = !this.checked;
    });

    acceptButton.addEventListener('click', function () {
        document.cookie = "licenseAccepted=true; max-age=" + 60 * 60 * 24 * 365; // 1 year
        licensePopup.style.display = 'none';
    });
});

function checkLicenseCookie() {
    if (!document.cookie.split('; ').find(row => row.startsWith('licenseAccepted='))) {
        document.getElementById('licensePopup').style.display = 'flex';
    }
}