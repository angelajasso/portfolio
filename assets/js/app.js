import { projects } from "./data/data.js";
import { renderProjects } from "./ui/render.js";
import { initTheme } from "./events/theme.js";
import { initEffects } from "./events/effects.js";
import { setState, subscribe, getState } from "./state/store.js";

function initApp() {
  initTheme();
  initEffects(); // 🔥 efectos globales (cursor, year)

  subscribe(render);

  // inicializar estado
  setState({
    projects,
    loading: false,
    error: null,
  });
}

function render() {
  const state = getState();
  renderProjects(state);
}

initApp();