$(document).ready(function () {
  var megaMenu = $(".transparent_background");
  var contentRecordLink = $(".hovering_mega_menue");
  contentRecordLink.on("mouseenter", function () {
    console.log("Mouse enter on contentRecordLink");
    megaMenu.css("display", "block");
  });
  $(".nav_main, .transparent_background").on("mouseleave", function (e) {
    console.log("Mouse leave on nav_main or transparent_background");
    var target = $(e.relatedTarget);
    if (
      !contentRecordLink.is(target) &&
      !megaMenu.is(target) &&
      contentRecordLink.has(target).length === 0 &&
      megaMenu.has(target).length === 0
    ) {
      megaMenu.css("display", "none");
    }
  });
});


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

$(document).ready(function () {
  $(document).on("click touchstart", function (e) {
    if (!$(e.target).closest(".navbar").length) {
      if ($(".navbar-collapse").hasClass("show")) {
        $(".navbar-toggler").trigger("click");
      }
    }
  });
  $(".navbar-nav").on("click touchstart", function (e) {
    e.stopPropagation();
  });
});
