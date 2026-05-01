export function initEffects() {
  initCursorGlow();
  initReveal();
  initYear(); // 👈 nuevo
}

// Año automático
function initYear() {
  const yearEl = document.getElementById("year");
  if (!yearEl) return;

  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
}

// cursor glow
function initCursorGlow() {
  document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
  });
}

// reveal
function initReveal() {
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
}