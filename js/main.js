// STICKY NAV


$(function() {
  
// PAGE SCROLL
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  $("#accordion div h3").click(function(e) {
    $(this).parents().siblings("div").toggleClass("ac-hidden");
    $(this).parents("div").toggleClass("ac-hidden");

    e.preventDefault();
  });
});

function addRemoveStickyClassOnNav(stickyNavTop){
    var scrollTop = $(window).scrollTop();
      
    if (scrollTop > stickyNavTop) { 
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky'); 
    }
  };