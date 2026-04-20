export function renderProjects(projects) {
  const container = document.getElementById("projects");

  container.innerHTML = projects
    .map(
      (p) => `
      <div class="card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <small>${p.tech.join(" · ")}</small>
      </div>
    `,
    )
    .join("");
}
