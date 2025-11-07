// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Typing Effect
const words = ["Front-End Developer", "Problem Solver", "Tech Enthusiast", "CSE Student"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  currentWord = words[i];
  const displayed = isDeleting ? currentWord.substring(0, j--) : currentWord.substring(0, j++);
  document.getElementById("typed-text").textContent = displayed;

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Fade-in Scroll Animation
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach((fader) => appearOnScroll.observe(fader));

// Smooth Scroll for Navigation
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
