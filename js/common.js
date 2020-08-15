$(document).ready(function () {
  if ($(window).width() > 992) {
    



    jQuery(window).scroll(function() { 
      if (jQuery(window).scrollTop() > 54) {
        jQuery('.header-nav').addClass('header-nav-active');
      } else {
        jQuery('.header-nav').removeClass('header-nav-active');
      }
     });
    
  }
  jQuery(window).scroll(function() { 
    if (jQuery(window).scrollTop() > 554) {
      var data = jQuery('.footer iframe').attr('data');
      jQuery('.footer iframe').attr('src', data);
      $(window).unbind('scroll'); 
    }
   });


  $('.sertif-wrap').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: false,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  if ($(window).width() <= 992) {
    jQuery('.burger-menu').on('click', function () { 
      jQuery(this).toggleClass('burger-active');
      jQuery('.header-nav').toggleClass('menu-active');
   });
    jQuery('.header-nav ul li a').on('click', function () { 
      jQuery(this).removeClass('burger-active');
      jQuery('.header-nav').removeClass('menu-active');
   });
  $('.catalog-wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: false,
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 4000
  });
  $('.algo-wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: false,
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 4000
  });
    
  }
});