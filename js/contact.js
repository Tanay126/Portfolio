document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        // Perform client-side validation here if needed

        // Simulate form submission success
        setTimeout(function () {
            statusMessage.textContent = 'Your message has been sent!';
            contactForm.reset();
            setTimeout(function () {
                statusMessage.textContent = '';
            }, 3000);
        }, 1500);
    });
});
