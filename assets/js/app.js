import { projects } from "./data/data.js";
import { renderProjects } from "./ui/render.js";
import { initEvents } from "./events/events.js";
import { initTheme } from "./events/theme.js";
import { initEffects } from "./events/effects.js";

function initApp() {
  renderProjects(projects);
  initEvents();
  initTheme();
  initEffects();
}

initApp();
