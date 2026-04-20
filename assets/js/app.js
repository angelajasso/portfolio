import { projects } from "./data.js";
import { renderProjects } from "./ui.js";
import { initAudio, playTone } from "./audio.js";

// render
renderProjects(projects);

// activar audio
document.addEventListener(
  "click",
  () => {
    initAudio();
  },
  { once: true },
);

// eventos UI
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(".card")) {
    playTone(320);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".card")) {
    playTone(480);
  }
});

// toggle
const button = document.getElementById("toggle-theme");
const root = document.documentElement;

// 1. Cargar tema guardado o sistema
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", prefersDark ? "dark" : "light");
}

// 2. Actualizar icono
const updateIcon = () => {
  const current = root.getAttribute("data-theme");
  button.querySelector(".toggle__icon").textContent =
    current === "dark" ? "🌞" : "🌙";

  button.setAttribute("aria-pressed", current === "dark");
};

updateIcon();

// 3. Evento toggle
button.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  updateIcon();
});

// 🎯 scroll
window.scrollToProjects = () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
};

// ✨ cursor glow
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// 👀 reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

setTimeout(() => {
  document.querySelectorAll(".card").forEach((el) => observer.observe(el));
}, 100);
