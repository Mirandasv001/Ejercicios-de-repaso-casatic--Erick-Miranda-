window.addEventListener('load', () => {
    const spinner = document.getElementById('loading-spinner');
    spinner.classList.add('opacity-0');
    setTimeout(() => {
        spinner.classList.add('d-none');
    }, 300);
});

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-bs-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'bi bi-sun-fill';
        themeToggle.className = 'btn btn-outline-warning btn-sm';
    } else {
        themeIcon.className = 'bi bi-moon-fill';
        themeToggle.className = 'btn btn-outline-secondary btn-sm';
    }
}

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove('d-none');
    } else {
        backToTop.classList.add('d-none');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const form = document.getElementById('contactForm');
const alertContainer = document.getElementById('alert-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity()) {
        alertContainer.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
                <i class="bi bi-check-circle-fill me-2"></i><strong>¡Mensaje enviado con éxito!</strong> Nos comunicaremos contigo muy pronto.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        form.reset();
        form.classList.remove('was-validated');
    } else {
        form.classList.add('was-validated');
    }
});