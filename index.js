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

// ---------------------mega menue------------------
$(document).ready(function () {
  var megaMenu = $(".transparent_background");
  var contentRecordLink = $(".hovering_mega_menue");
  var megaMenuTimer;

  // Hide mega menu initially
  megaMenu.css("display", "none");

  contentRecordLink.on("mouseenter", function () {
    clearTimeout(megaMenuTimer);

    // Show mega menu on hovering content record
    megaMenu.css("display", "block");
    console.log("mega menu");
  });

  function hideMegaMenu() {
    megaMenu.css("display", "none");
  }

  $(".nav_main, .transparent_background").on("mouseleave", function (e) {
    var target = $(e.relatedTarget);

    if (
      !contentRecordLink.is(target) &&
      !megaMenu.is(target) &&
      contentRecordLink.has(target).length === 0 &&
      megaMenu.has(target).length === 0
    ) {
      megaMenuTimer = setTimeout(hideMegaMenu, 100);
    }
  });

  $(".nav_main, .transparent_background").on("mousemove", function (e) {
    clearTimeout(megaMenuTimer);

    var target = $(e.target);

    if (
      !contentRecordLink.is(target) &&
      !megaMenu.is(target) &&
      contentRecordLink.has(target).length === 0 &&
      megaMenu.has(target).length === 0
    ) {
      megaMenuTimer = setTimeout(hideMegaMenu, 100);
    }
  });

  megaMenu.on("mouseenter", function () {
    clearTimeout(megaMenuTimer);
  });

  megaMenu.on("mouseleave", function () {
    megaMenuTimer = setTimeout(hideMegaMenu, 100);
  });
});
