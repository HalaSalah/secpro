$(function (){
    'use strict';
    var  winHeight=$(window).height(),
         upperBarHeight=$(".upper-bar").innerHeight(),
         navBarHeight=$(".navbar").innerHeight();
    
    //NAVBAR SCROLL
    $(window).scroll(function(){
        $(window).scrollTop() >= $('.navbar').height() ?  $('.navbar').addClass('navbar-fixed-top') : $('.navbar').removeClass('navbar-fixed-top')
            //Condition ? true :false;
    });
    
    //Smooth Scroll Div
    $(".navbar li a").click(function(){
        $("html ,body").animate({scrollTop: $("#"+$(this).data("value")).offset().top-50},1000);
    });
    
    //CAROUSEL ITEM
    $(".header .slider, .header .slider .carousel-item").height(winHeight - (upperBarHeight +navBarHeight));
    
    //COUNT SECTION
    $('.count').counterUp({
                delay: 10,
                time: 1000
            });
  $('.owl-carousel').owlCarousel();
    
    //TESTYMOIALS
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 50,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
    
    var swiper = new Swiper('.swiper-container2', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination2',
          clickable: true,
        },
    });
});