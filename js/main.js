/* main.js */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        console.log('Form submitted:', Object.fromEntries(formData));
        form.reset();
    });
});
