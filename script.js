// =========================================
// 1. SMOOTH SCROLL FOR NAVIGATION LINKS
// =========================================
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    }
});
});

// =========================================
// 2. ACTIVE LINK HIGHLIGHT ON SCROLL
// =========================================
const sections = document.querySelectorAll('section, header');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
let currentSection = '';

sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
    }
});

links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
    }
});
});

// =========================================
// 3. NAVBAR SHADOW ON SCROLL
// =========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}
});

// =========================================
// 4. SCROLL REVEAL ANIMATION
// =========================================
const revealElements = document.querySelectorAll('section, .project-card, .skill-list span');

const revealOnScroll = () => {
const triggerPoint = window.innerHeight * 0.85;

revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerPoint) {
        el.classList.add('show');
    }
});
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// =========================================
// 5. TYPING EFFECT IN HERO SECTION
// =========================================
const typingText = document.querySelector('.hero p');
if (typingText) {
const originalText = typingText.textContent;
typingText.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < originalText.length) {
        typingText.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
};

window.addEventListener('load', typeWriter);
}

// =========================================
// 6. CURRENT YEAR IN FOOTER
// =========================================
const footer = document.querySelector('footer p');
if (footer) {
const year = new Date().getFullYear();
footer.textContent = `© ${year} Pradeep Chakrawarti. All rights reserved.`;
}