import { runReveal } from "../events/effects.js";

function projectCardTemplate(project) {
  return `
    <div class="card">
      <h3>${project.name ?? "Untitled Project"}</h3>
    </div>
  `;
}

export function renderProjects({ projects, loading, error }) {
  const container = document.getElementById("projects");

  if (!container) return;

  // 🔄 loading state
  if (loading) {
    container.innerHTML = `<p>Loading projects...</p>`;
    return;
  }

  // ❌ error state
  if (error) {
    container.innerHTML = `<p>Something went wrong</p>`;
    return;
  }

  // 📭 empty state
  if (!projects || projects.length === 0) {
    container.innerHTML = `<p>No projects available</p>`;
    return;
  }

  // ✅ success state
  container.innerHTML = projects
    .map(projectCardTemplate)
    .join("");

  // 🔥 activar reveal DESPUÉS de renderizar
  runReveal(container);
}

