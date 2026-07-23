// ===== DARK MODE =====
const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', function () {

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.innerText = '☀️ Light Mode';
    } else {
        toggleBtn.innerText = '🌙 Dark Mode';
    }
});

// ===== FORM VALIDATION =====
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const text = document.getElementById('message').value.trim();

    formMessage.className = '';

    if (name === '' || email === '' || text === '') {
        formMessage.textContent = 'Please fill all fields';
        formMessage.classList.add('error');
        return;
    }

    formMessage.textContent = '✅ Message sent successfully';
    formMessage.classList.add('success');

    form.reset();
});
