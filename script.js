// =======================
// DARK MODE TOGGLE
// =======================

const themeButton = document.querySelector('#themeToggle');

themeButton.addEventListener('click', function () {

    // body-ku dark-mode class add/remove
    document.body.classList.toggle('dark-mode');

    // button text change
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = '☀️ Light Mode';
    } else {
        themeButton.textContent = '🌙 Dark Mode';
    }
});


// =======================
// CONTACT FORM VALIDATION
// =======================

const form = document.querySelector('#contactForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const formMessage = document.querySelector('#formMessage');

form.addEventListener('submit', function (e) {

    // page refresh aagakoodadhu
    e.preventDefault();

    console.log('Form submitted');

    // input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // reset
    formMessage.textContent = '';
    formMessage.className = '';

    // Empty validation
    if (name === '' || email === '' || message === '') {

        formMessage.textContent = 'Please fill all fields.';
        formMessage.classList.add('error');

        console.log('Empty field found');
        return;
    }

    // Email validation
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent = 'Enter a valid email address.';
        formMessage.classList.add('error');

        console.log('Invalid email');
        return;
    }

    // Success
    formMessage.textContent = '✅ Message sent successfully!';
    formMessage.classList.add('success');

    console.log('Form is valid');

    // clear form
    form.reset();
});
