import { runReveal } from "../events/effects.js";

function projectCardTemplate(project) {
  return `
    <article class="featured-card">
      <div class="ambient-glow"></div>

      <div class="featured-image">
        <img src=${project.imgUrl} alt=${project.imgAlt} />
      </div>
      <div class="featured-content">

      <span class="featured-tag"> ${project.tag}</span>

      <h3> ${project.name}</h3>

      <p>${project.description}</p>

      <div class="tech-stack">

        <span>${project.tech1}</span>
        <span>${project.tech2}</span>
        <span>${project.tech3}</span>

      </div>

      <div class="card-links">

        <a href="#">
          Live Demo →
        </a>

        <a href="#">
          GitHub
        </a>

      </div>

    </div>

    </article>
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

