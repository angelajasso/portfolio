// ==============================
// 🎯 Public API
// ==============================

export function initEffects() {
  initCursorGlow();
  initYear();
}

export function runReveal(root = document) {
  revealElements(root);
}

// ==============================
// 🖱️ Cursor Glow
// ==============================

function initCursorGlow() {
  document.addEventListener("mousemove", handleMouseMove);
}

function handleMouseMove(e) {
  document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);
}

// ==============================
// 📅 Dynamic Year
// ==============================

function initYear() {
  const yearEl = document.getElementById("year");
  if (!yearEl) return;

  yearEl.textContent = new Date().getFullYear();
}

// ==============================
// ✨ Reveal Animation
// ==============================

let observer;

function getObserver() {
  if (observer) return observer;

  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.1,
  });

  return observer;
}

function handleIntersect(entries, obs) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");
    obs.unobserve(entry.target); // 🔥 evita repetir
  });
}

function revealElements(root) {
  const elements = root.querySelectorAll(".card");
  const obs = getObserver();

  elements.forEach((el) => obs.observe(el));
}