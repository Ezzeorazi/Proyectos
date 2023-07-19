$(window).scroll(function() {
    var position = $('.slide-in-left').offset().top;
    var scrollPosition = $(window).scrollTop() + $(window).height();
  
    if (scrollPosition > position) {
      $('.slide-in-left').addClass('show');
    }
  
    $('.slide-list li').each(function() {
      var liPosition = $(this).offset().top;
      var liScrollPosition = $(window).scrollTop() + $(window).height();
  
      if (liScrollPosition > liPosition) {
        $(this).addClass('slide-in');
      }
    });
  });
  