/*-----------------------------------------------------------------------------------

    Theme Name: Crizal - Onepage Agency Template
    Description: Onepage Agency Template
    Author: Chitrakoot Web

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. scrollIt
        03. Scroll To Top
        04. Sidemenu toggle
        05. Navbar scrolling background
        06. Parallax
        07. Countup
        08. Window When Loading
        09. FullScreenHeight Resize function
        10. OwlCarousel Slider 
        
    ---------------------------------- */    

$(function() {

    "use strict";

    var wind = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });


        /*------------------------------------
            02. scrollIt
        --------------------------------------*/

        $.scrollIt({
          upKey: 38,                // key code to navigate to the next section
          downKey: 40,              // key code to navigate to the previous section
          easing: 'swing',          // the easing function for animation
          scrollTime: 600,          // how long (in ms) the animation takes
          activeClass: 'active',    // class given to the active nav element
          onPageChange: null,       // function(pageIndex) that is called when page is changed
          topOffset: -70            // offste (in px) for fixed top navigation
        });


        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        wind.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });


        /*------------------------------------
            04. Sidemenu toggle
        --------------------------------------*/

        if ($("#sidebar_toggle").length) {
           $("body").addClass("sidebar-menu");
           $("#sidebar_toggle").on("click", function () {
              $(".sidebar-menu").toggleClass("active");
              $(".side-menu").addClass("side-menu-active"), $("#close_sidebar").fadeIn(700)
           }), $("#close_sidebar").on("click", function () {
              $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".sidebar-menu").removeClass("active")
           }), $("#btn_sidebar_colse").on("click", function () {
              $(".side-menu").removeClass("side-menu-active"), $("#close_sidebar").fadeOut(200), $(".sidebar-menu").removeClass("active")
           });
        }


        /*------------------------------------
            05. Navbar scrolling background
        --------------------------------------*/

        wind.on("scroll",function () {

            var bodyScroll = wind.scrollTop(),
                navbar = $(".navbar");

            if(bodyScroll > 100){
                navbar.addClass("nav-scroll");
            }else{
                navbar.removeClass("nav-scroll");
            }
        });
    
         var windowsize = wind.width();
            if (windowsize <= 991) {
            $('.navbar-nav .nav-link').on("click", function(){
                $('.navbar-collapse.show').removeClass('show');
                $('.navbar .navbar-toggler').addClass('collapsed');
            });
          }


        /*------------------------------------
            06. Parallax
        --------------------------------------*/

        var pageSection = $(".bg-img, section, footer");
        pageSection.each(function(indx){
            
            if ($(this).attr("data-background")){
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }

        });


        /*------------------------------------
            07. countup
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        
        /*------------------------------------
            08. Window When Loading
        --------------------------------------*/

        $(window).on("load",function (){

            var wind = $(window);

            // stellar
            wind.stellar();

        });
        

        /*------------------------------------
            09. FullScreenHeight Resize function
        --------------------------------------*/

        $(window).resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        // FullScreenHeight function
        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $(window).height();
            element.css('min-height', $minheight);
        }

        // FullScreenHeight with resize function
        function SetResizeContent() {
            fullScreenHeight();
        }

        SetResizeContent();
        

        /*------------------------------------
            10. OwlCarousel Slider
        --------------------------------------*/
        
        $(document).ready(function() {

            var owl = $('.header .owl-carousel');

            // Slider owlCarousel
            $('.slider-fade .owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                autoplay: true,
                smartSpeed: 1000,
                mouseDrag: false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut'
            });

            // testmonial11 carousel
            $('.testimonial').owlCarousel({
                loop: true,
                responsiveClass: true,
                autoplay: true,
                smartSpeed: 900,
                nav: false,
                dots: true,
                margin: 0,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 1
                    }
                }
            });

            // Default owlCarousel
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                autoplay: true,
                smartSpeed: 500
            });

            // Slider text animation
            owl.on('changed.owl.carousel', function (event) {
                var item = event.item.index - 2; // Position of the current item
                $('h3').removeClass('animated fadeInUp');
                $('h1').removeClass('animated fadeInUp');
                $('p').removeClass('animated fadeInUp');
                $('.btn').removeClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('.btn').addClass('animated fadeInUp');
            });

        });

});