// Fade-in animation
const sections = document.querySelectorAll(".hero, .skills, .projects");
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Active navbar highlight
const navLinks = document.querySelectorAll("nav a");
const pageSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    pageSections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
    });
});

// Dark mode toggle with icon swap
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darkToggle.src = "assets/images/sun.png";
    } else {
        darkToggle.src = "assets/images/moon.png";
    }
});

// Typewriter effect for hero text
const titleText = "Hi, I'm Petros";
const subtitleText = "Data Science & AI Master's Student & ML Developer";

const titleElement = document.getElementById("heroTitle");
const subtitleElement = document.getElementById("heroSubtitle");

let titleIndex = 0;
let subtitleIndex = 0;

function typeWriterTitle() {
    if (titleIndex < titleText.length) {
        titleElement.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeWriterTitle, 80);
    } else {
        setTimeout(typeWriterSubtitle, 400); // small pause before subtitle
    }
}

function typeWriterSubtitle() {
    if (subtitleIndex < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
        subtitleIndex++;
        setTimeout(typeWriterSubtitle, 60);
    }
}

// Clear text on reload and start typing
window.addEventListener("load", () => {
    titleElement.textContent = "";
    subtitleElement.textContent = "";
    typeWriterTitle();
});

// Make entire project cards clickable
document.querySelectorAll(".project-card").forEach(card => {
    const link = card.querySelector("a");
    if (link) {
        card.addEventListener("click", () => {
            window.open(link.href, "_blank");
        });
    }
});
