// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
    });
}

// Check Local Storage for Dark Mode Preference
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
}

// Scroll Animations
const sections = document.querySelectorAll('section');

const checkVisibility = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Animated Statistics
const statNumbers = document.querySelectorAll('.stat-number');

const animateStats = () => {
    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const increment = target / 100;
        let count = 0;

        const updateNumber = () => {
            if (count < target) {
                count += increment;
                stat.textContent = Math.ceil(count);
                setTimeout(updateNumber, 20);
            } else {
                stat.textContent = target;
            }
        };

        updateNumber();
    });
};

// Trigger animation when section is visible
const statsSection = document.getElementById('statistics');

const checkStatsVisibility = () => {
    if (!statsSection) return; // Ensure statsSection exists
    const sectionTop = statsSection.getBoundingClientRect().top;
    const sectionBottom = statsSection.getBoundingClientRect().bottom;
    if (sectionTop < window.innerHeight && sectionBottom > 0) {
        animateStats();
        window.removeEventListener('scroll', checkStatsVisibility);
    }
};

if (statsSection) {
    window.addEventListener('scroll', checkStatsVisibility);
}

// Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

if (galleryItems.length > 0 && lightbox && lightboxImg && closeLightbox) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'flex';
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}

// Scroll Animation for Mission/Vision Section
const missionVisionSection = document.getElementById('mission-vision');

const checkMissionVisionVisibility = () => {
    if (!missionVisionSection) return;
    const sectionTop = missionVisionSection.getBoundingClientRect().top;
    const sectionBottom = missionVisionSection.getBoundingClientRect().bottom;
    if (sectionTop < window.innerHeight && sectionBottom > 0) {
        missionVisionSection.classList.add('visible');
    }
};

window.addEventListener('scroll', checkMissionVisionVisibility);
window.addEventListener('load', checkMissionVisionVisibility);

// Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

if (galleryItems.length > 0 && lightbox && lightboxImg && closeLightbox) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'flex';
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Function to toggle dark mode
const toggleDarkMode = () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
};

// Event listener for theme toggle
if (themeToggle) {
    themeToggle.addEventListener('click', toggleDarkMode);
}

// Check Local Storage for Dark Mode Preference
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
}

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Clear previous status messages
        formStatus.textContent = '';
        formStatus.classList.remove('error');

        // Get form data
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        // Simple validation
        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.classList.add('error');
            return;
        }

        if (!validateEmail(email)) {
            formStatus.textContent = 'Please enter a valid email address.';
            formStatus.classList.add('error');
            return;
        }

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            formStatus.textContent = 'Message sent successfully!';
            contactForm.reset(); // Clear the form
        }, 1000);
    });
}

// Email validation helper function
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};