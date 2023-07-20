$(window).scroll(function() {
  $('.slide-list li').each(function() {
    var position = $(this).offset().top;
    var scrollPosition = $(window).scrollTop() + $(window).height();

    if (scrollPosition > position) {
      $(this).addClass('slide-in');
    }
  });
});

$(document).ready(function() {

  $("#animated-image").hide();

  $(window).scroll(function() {
    var position = $("#animated-image").offset().top;
    var scrollPosition = $(window).scrollTop() + $(window).height();

    if (scrollPosition > position) {
      $("#animated-image").fadeIn(2000);
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var myCarousel = new bootstrap.Carousel(document.getElementById("myCarousel"), {
    interval: 3000, // Tiempo en milisegundos entre cada cambio de imagen (3 segundos en este caso)
    wrap: true // Permite que el carrusel continúe reproduciéndose al finalizar la última imagen
  });
});