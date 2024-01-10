$(document).ready(function () {
  console.log("Document ready!");

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
  console.log("DOMContentLoaded!");

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
