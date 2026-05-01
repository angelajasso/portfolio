export function initEvents() {

  // scroll global
  window.scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  };
}