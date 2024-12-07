// Function to check if a file exists
function checkFileExists(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.status === 200);
        }
    };
    xhr.send();
}

// Event listener for all background guide links
document.querySelectorAll('.background-guide-link').forEach(link => {
    link.addEventListener('click', function (event) {
        const fileUrl = this.getAttribute('href');
        checkFileExists(fileUrl, function (exists) {
            if (!exists) {
                window.location.href = 'wip.html';  // Redirect to the WIP page if file doesn't exist
                event.preventDefault();  // Prevent default action (opening the link)
            }
        });
    });
});