export function initTheme() {
  const button = document.getElementById("toggle-theme");
  const root = document.documentElement;

  if (!button) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  const updateIcon = () => {
    const current = root.getAttribute("data-theme");

    button.querySelector(".toggle__icon").textContent =
      current === "dark" ? "🌞" : "🌙";

    button.setAttribute("aria-pressed", current === "dark");
  };

  updateIcon();

  button.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    updateIcon();
  });
}