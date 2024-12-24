// TODO Test Me

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const newUrl = prettyUrl(link.href);
        link.href = newUrl;
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = newUrl;
        });
    });

    // Redirect to pretty URL if the current URL is ugly
    const currentUrl = window.location.href;
    const prettyCurrentUrl = prettyUrl(currentUrl);
    if (currentUrl !== prettyCurrentUrl) {
        window.location.href = prettyCurrentUrl;
    }
});

function prettyUrl(url) {
    if (url.includes('wesmun') || url.includes('github')) {
        if (url.endsWith('index.html')) {
            url = url.replace('index.html', '');
        } else if (url.endsWith('.html')) {
            url = url.slice(0, -5);
        }
    }
    return url;
}