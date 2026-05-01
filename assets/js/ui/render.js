export function renderProjects(projects) {
  const container = document.getElementById("projects");

  if (!container) return;

  container.innerHTML = projects
    .map(
      (p) => `
      <div class="card">
        <h3>${p.name}</h3>
      </div>
    `
    )
    .join("");
}
