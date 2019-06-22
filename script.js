function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
}

// Menu-toggle button

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
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
  // scroll to top button
  $(window).scroll(function() {
    if($(this).scrollTop() > 40) {
        $('#topBtn').fadeIn();
    } else {
        $('#topBtn').fadeOut();
    }
    });

$("#topBtn").click(function() {
    $('html ,body').animate({scrollTop : 0},800);
});
});
