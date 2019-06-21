function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
}

// Menu-toggle button

$(document).ready(function() {
  $("#icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
  $(".nav_links").on("click", function() {
    $("nav ul").toggleClass("showing");
  })
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });
});
// Scrolling Effect
