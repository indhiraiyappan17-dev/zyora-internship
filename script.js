// DARK MODE
const themeButton = document.getElementById('themeToggle');

themeButton.addEventListener('click', function () {

    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        themeButton.innerHTML = '☀️ Light Mode';
    } else {
        themeButton.innerHTML = '🌙 Dark Mode';
    }
});

// FORM VALIDATION
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e){

    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    formMessage.textContent = '';
    formMessage.className = '';

    if(name === '' || email === '' || message === ''){
        formMessage.textContent = 'Please fill all fields.';
        formMessage.classList.add('error');
        return;
    }

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if(!emailPattern.test(email)){
        formMessage.textContent = 'Enter a valid email address.';
        formMessage.classList.add('error');
        return;
    }

    formMessage.textContent = '✅ Message sent successfully!';
    formMessage.classList.add('success');

    form.reset();
});
