// ================================
// Mobile Menu Toggle
// ================================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

        nav.classList.remove("active");
    });
});

// ================================
// Navbar Shadow on Scroll
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
    } else {
        navbar.style.boxShadow = "none";
    }

});

// ================================
// Active Navigation Link
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "aqua";
        }

    });

});

// ================================
// Typing Effect
// ================================

const title = document.querySelector(".hero h1");

const text = "Grow Your Business With AI";

let index = 0;

title.textContent = "";

function typingEffect() {

    if (index < text.length) {

        title.textContent += text.charAt(index);

        index++;

        setTimeout(typingEffect, 80);

    }

}

typingEffect();

// ================================
// Reveal Cards
// ================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});

// ================================
// Auto Testimonial Slider
// ================================

const testimonials = document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showTestimonial() {

    testimonials.forEach(item => {
        item.style.display = "none";
    });

    testimonials[currentSlide].style.display = "block";

    currentSlide++;

    if (currentSlide >= testimonials.length) {
        currentSlide = 0;
    }

}

showTestimonial();

setInterval(showTestimonial, 3000);

// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ================================
// Keyboard Shortcut
// Press T for Theme Toggle
// ================================

document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "t") {
        themeBtn.click();
    }

});

// ================================
// Welcome Message
// ================================

window.addEventListener("load", () => {

    console.log("%cWelcome to AI Startup 🚀",
        "color:aqua;font-size:18px;font-weight:bold;");

});