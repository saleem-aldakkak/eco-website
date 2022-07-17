/*-----------------------------------------------------------------------------------

    Theme Name: Crizal - Onepage Business Template
    Description: Onepage Business Template
    Author: Chitrakoot Web

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. scrollIt
        03. Scroll To Top
        04. Sidemenu toggle
        05. Navbar scrolling background
        06. Parallax
        07. Magnific-popup
        08. Popup Youtube
        10. OurstoryPopup
        09. Countup
        10. Window When Loading
        11. FullScreenHeight Resize function
        12. OwlCarousel Slider
        
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
                navbar = $(".navbar"),
                navbloglogo = $(".blog-nav .logo> img"),
                darkbg = $(".bg-black .logo> img"),
                logo = $(".navbar .logo> img");

            if(bodyScroll > 100){
                navbar.addClass("nav-scroll");
                logo.attr('src', 'img/logo-dark.png');
                darkbg.attr('src', 'img/logo-light.png');

            }else{
                navbar.removeClass("nav-scroll");
                logo.attr('src', 'img/logo-light.png');
                navbloglogo.attr('src', 'img/logo-dark.png');
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
            07. Magnific-popup
        --------------------------------------*/

        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        /*------------------------------------
            08. Popup Youtube
        --------------------------------------*/

        $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
        }); 

        /*------------------------------------
            09. Countup
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });
        
        /*------------------------------------
            10. Window When Loading
        --------------------------------------*/

        $(window).on("load",function (){

            var wind = $(window);

            // stellar
            wind.stellar();

        });


        /*------------------------------------
            11. FullScreenHeight Resize function
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
            12. OwlCarousel Slider
        --------------------------------------*/
        
        $(document).ready(function() {

            var owl = $('.header .owl-carousel');

            // Clients carousel
            $('#clients').owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                responsiveClass: true,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 2,
                        margin: 20
                    },
                    768: {
                        items: 3,
                        margin: 40,
                    },
                    992: {
                        items: 4,
                        margin: 60,
                        },
                        1200: {
                        items: 5,
                        margin: 80,
                    }
                }
            });

            // testimonial-slider owlCarousel
            $('.testimonial-slider .owl-carousel').owlCarousel({
                loop:true,
                margin: 0,
                autoplay:false,
                dots: false,
                nav:true,
                navText: ["<i class='arrow'></i>", "<i class='arrow'></i>"],
                smartSpeed:500,
                responsive: {
                    0: {
                        items: 1,
                        autoplay: true,
                    },
                    768: {
                        items: 1,
                    },
                    992: {
                        items: 1,
                    }
                }            
            });

            // Default owlCarousel
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop:true,
                margin: 0,
                autoplay:true,
                smartSpeed:500
            });


        });

});