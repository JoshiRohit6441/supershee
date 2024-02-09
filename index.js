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
// --------------------------------------second-head-section--------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var prefix = ["first", "second", "third", "fourth", "fifth"];
  var divs = prefix.map((item) =>
    document.querySelector("." + item + "_opt_resp")
  );

  prefix.forEach(function (item, index) {
    var opts = document.querySelectorAll("." + item + "_opt");
    if (opts.length > 0) {
      opts.forEach(function (opt) {
        opt.addEventListener("click", function (event) {
          event.preventDefault();
          console.log("Clicked on " + item + " option");
          prefix.forEach(function (item, i) {
            var currDiv = document.querySelector("." + item + "_opt_resp");
            if (i !== index) {
              currDiv.classList.add("d-none");
            } else {
              currDiv.classList.toggle("d-none");
            }
          });
        });
      });
    } else {
      console.error("Element not found for " + item + " option. Check IDs.");
    }
  });

  document.addEventListener("click", function (event) {
    var isClickedInsideOpt = prefix.some((item) => {
      var buttons = document.querySelectorAll("." + item + "_opt");
      return Array.from(buttons).some(
        (button) =>
          button.contains(event.target) ||
          event.target.classList.contains(item + "_opt")
      );
    });
    if (!isClickedInsideOpt) {
      divs.forEach((div) => div.classList.add("d-none"));
    }
  });
});
