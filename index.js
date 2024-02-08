document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header-container").innerHTML = html;
    });

  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html;
    });
  fetch("news_ooption.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("second-head-container").innerHTML = html;
    });
});

// ------------------------------------menu-----------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    const navbar = document.getElementById("navbarNav");
    const isNavbarCollapsed =
      window.getComputedStyle(navbar).display === "none";
    const isClickInsideNavbar = navbar.contains(event.target);

    if (!isClickInsideNavbar || isNavbarCollapsed) {
      $(".navbar-collapse").collapse("hide");
    }
  });
});
