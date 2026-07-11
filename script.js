// ===============================
// KAMOHELOC CONSTRUCTION
// script.js
// ===============================
 
// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
 
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}
 
// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});
 
// Sticky Header
const header = document.querySelector("header");
 
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
 
// Scroll Animation
const sections = document.querySelectorAll(
".card, .why-box, .about-preview, .contact, .cta"
);
 
const revealSection = () => {
 
    sections.forEach(section => {
 
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
 
        if (sectionTop < windowHeight - 100) {
 
            section.classList.add("show");
 
        }
 
    });
 
};
 
window.addEventListener("scroll", revealSection);
revealSection();
 
// Active Navigation
const navLinks = document.querySelectorAll("nav a");
 
navLinks.forEach(link => {
 
    link.addEventListener("click", function () {
 
        navLinks.forEach(item => {
            item.classList.remove("active");
        });
 
        this.classList.add("active");
 
    });
 
});
 
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 
    anchor.addEventListener("click", function (e) {
 
        e.preventDefault();
 
        const target = document.querySelector(this.getAttribute("href"));
 
        if (target) {
 
            target.scrollIntoView({
                behavior: "smooth"
            });
 
        }
 
    });
 
});
 
// Back To Top Button
 
const backToTop = document.createElement("button");
 
backToTop.innerHTML = "↑";
 
backToTop.id = "backToTop";
 
document.body.appendChild(backToTop);
 
window.addEventListener("scroll", () => {
 
    if (window.scrollY > 300) {
 
        backToTop.style.display = "block";
 
    } else {
 
        backToTop.style.display = "none";
 
    }
 
});
 
backToTop.addEventListener("click", () => {
 
    window.scrollTo({
 
        top: 0,
 
        behavior: "smooth"
 
    });
 
});
 
// Service Cards Hover Animation
const cards = document.querySelectorAll(".card");
 
cards.forEach(card => {
 
    card.addEventListener("mouseenter", () => {
 
        card.style.transform = "translateY(-10px)";
 
    });
 
    card.addEventListener("mouseleave", () => {
 
        card.style.transform = "translateY(0px)";
 
    });
 
});
 
// Simple Counter Animation
const counters = document.querySelectorAll(".counter");
 
const startCounter = () => {
 
    counters.forEach(counter => {
 
        const target = +counter.getAttribute("data-target");
 
        let count = 0;
 
        const speed = target / 100;
 
        const update = () => {
 
            if (count < target) {
 
                count += speed;
 
                counter.innerText = Math.ceil(count);
 
                requestAnimationFrame(update);
 
            } else {
 
                counter.innerText = target;
 
            }
 
        };
 
        update();
 
    });
 
};
 
window.addEventListener("load", startCounter);
 
// Footer Year
const year = document.querySelector("#year");
 
if (year) {
 
    year.textContent = new Date().getFullYear();
 
}
 
// Console Message
console.log("Kamoheloc Construction Services Pty Ltd Website Loaded Successfully");
