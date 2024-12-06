document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // In a real application, you would send this data to a server
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Show success message
        form.innerHTML = `
            <div class="success-message">
                <h3>Registration Successful!</h3>
                <p>Thank you for registering for WESMUN 2024.</p>
                <p>Please check your email for further instructions.</p>
            </div>
        `;
    });
});