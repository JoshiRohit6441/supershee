document.addEventListener("DOMContentLoaded", function () {
  var navbarNav = document.querySelector("navbar-nav");
  var navbarToggler = document.querySelector("navbar-toggler");

  navbarToggler.addEventListener("click", function () {
    navbarNav.style.display === "none" || navbarNav.style.display === ""
      ? "block"
      : "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header-container").innerHTML = html;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html;
    });
});
