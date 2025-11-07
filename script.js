// ✅ Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ✅ Typing Effect in Hero
const words = ["Front-End Developer", "Problem Solver", "Tech Enthusiast", "CSE Student"];
let i = 0, j = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[i];
  document.getElementById("typed-text").textContent = isDeleting
    ? current.substring(0, j--)
    : current.substring(0, j++);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }
}
typeEffect();

// ✅ Fade-in Animation
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.3 });

faders.forEach(el => observer.observe(el));

// ✅ Smooth Scroll
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

console.log("✅ Portfolio Loaded Successfully");
