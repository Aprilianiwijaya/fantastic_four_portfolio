// ===============================
// ANIMASI MUNCUL SAAT SCROLL
// ===============================
const cards = document.querySelectorAll('.team-card, .project-card');

function showCards() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
}

// Jalankan saat scroll & saat pertama buka
window.addEventListener('scroll', showCards);
window.addEventListener('load', showCards);


// ===============================
// SMOOTH SCROLL NAVBAR
// ===============================
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===============================
// NAVBAR BERUBAH SAAT SCROLL
// ===============================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
    }
});


// ===============================
// MENU AKTIF SAAT DISCROLL
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") == "#" + current) {
            a.classList.add("active");
        }
    });
});
