$(document).ready(function(){
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  })
  lightbox.option({
    'fadeDuration': 400,
    'imageFadeDuration': 500,
    'positionFromTop' : 110,
    'wrapAround': true,
  })
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

  $("a[href*='#']:not([href='#])").click(function() {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: ($(target).offset().top - 72)
    }, 1000);
    event.preventDefault();
  });
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
})