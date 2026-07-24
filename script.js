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
const loadProfileBtn = document.getElementById("loadProfile");
const profile = document.getElementById("profile");

async function loadGitHubProfile() {
    profile.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch("https://api.github.com/users/indhiraiyappan17-dev");

        if (!response.ok) {
            throw new Error("Couldn't fetch data");
        }

        const data = await response.json();

        profile.innerHTML = `
            <img src="${data.avatar_url}" width="120" style="border-radius:50%;">
            <h3>${data.name || data.login}</h3>
            <p>${data.bio || "No bio available"}</p>
            <p>Followers: ${data.followers}</p>
            <p>Public Repositories: ${data.public_repos}</p>
            <a href="${data.html_url}" target="_blank">Visit GitHub Profile</a>
        `;
    } catch (error) {
        profile.innerHTML = "<p>Couldn't fetch data.</p>";
    }
}

loadProfileBtn.addEventListener("click", loadGitHubProfile);
