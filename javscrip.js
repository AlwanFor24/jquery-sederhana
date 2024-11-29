$(document).ready(function () {
  // Tag Selector - Apply background color to all paragraphs
  $("p").on("click", function () {
    $(this).css("background-color", "lightyellow");
  });

  // Class Selector - Change color of elements with 'highlight' class
  $(".highlight").on("click", function () {
    $(this).css("color", "blue");
  });

  // ID Selector - Apply a border and change text color
  $("#special").on("click", function () {
    $(this).css({
      "border": "2px solid purple",
      "color": "orange"
    });
  });

  // Button Selector - Change button background color on hover
  $("input[type='button']").on("mouseenter", function () {
    $(this).css("background-color", "lightblue");
  }).on("mouseleave", function () {
    $(this).css("background-color", "");
  });

  // Input Submit Selector - Change background on hover
  $("input[type='submit']").on("mouseenter", function () {
    $(this).css("background-color", "lightgreen");
  }).on("mouseleave", function () {
    $(this).css("background-color", "");
  });
});