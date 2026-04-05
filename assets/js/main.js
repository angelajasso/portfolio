const path = window.location.pathname.includes("/pages/")
  ? "../components/navbar.html"
  : "components/navbar.html";

fetch(path)
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });
