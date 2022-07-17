/*-----------------------------------------------------------------------------------

    Theme Name: Crizal - Onepage Consulting Template
    Description: Onepage Consulting Template
    Author: Chitrakoot Web

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. scrollIt
        03. Scroll To Top
        04. Sidemenu toggle
        05. Navbar scrolling background
        06. Parallax
        07. Horizontal Tab
        08. Countup
        09. Window When Loading
        10. FullScreenHeight Resize function
        11. OwlCarousel Slider
        
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
            07. Horizontal Tab
        --------------------------------------*/

        if ($(".horizontaltab").length !== 0) {
                $('.horizontaltab').easyResponsiveTabs({
                    type: 'default', //Types: default, vertical, accordion
                    width: 'auto', //auto or any width like 600px
                    fit: true, // 100% fit in a container
                    tabidentify: 'hor_1', // The tab groups identifier
                    activate: function(event) { // Callback function if tab is switched
                        var $tab = $(this);
                        var $info = $('#nested-tabInfo');
                        var $name = $('span', $info);
                        $name.text($tab.text());
                        $info.show();
                    }
                });
            }


        /*------------------------------------
            08. Countup
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });
        
        /*------------------------------------
            09. Window When Loading
        --------------------------------------*/

        $(window).on("load",function (){

            var wind = $(window);

            // stellar
            wind.stellar();

        });

        /*------------------------------------
            10. FullScreenHeight Resize function
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
            11. OwlCarousel Slider
        --------------------------------------*/
        
        $(document).ready(function() {

            // Revolution video
            if ($("#rev_slider_1014_1").length !== 0) {
                var tpj = jQuery;
                    var revapi1014;
                    tpj(document).ready(function () {
                        if (tpj("#rev_slider_1014_1").revolution == undefined) {
                            revslider_showDoubleJqueryError("#rev_slider_1014_1");
                        } else {
                            revapi1014 = tpj("#rev_slider_1014_1").show().revolution({
                                sliderType: "standard",
                                jsFileLocation: "revolution/js/",
                                sliderLayout: "fullscreen",
                                dottedOverlay: "none",
                                delay: 9000,
                                navigation: {
                                    keyboardNavigation: "off",
                                    keyboard_direction: "horizontal",
                                    mouseScrollNavigation: "off",
                                    mouseScrollReverse: "default",
                                    onHoverStop: "off",
                                    touch: {
                                        touchenabled: "on",
                                        swipe_threshold: 75,
                                        swipe_min_touches: 1,
                                        swipe_direction: "horizontal",
                                        drag_block_vertical: false
                                    },
                                    arrows: {
                                        style: "uranus",
                                        enable: false,
                                        hide_onmobile: true,
                                        hide_under: 768,
                                        hide_onleave: false,
                                        tmp: '',
                                        left: {
                                            h_align: "left",
                                            v_align: "center",
                                            h_offset: 20,
                                            v_offset: 0
                                        },
                                        right: {
                                            h_align: "right",
                                            v_align: "center",
                                            h_offset: 20,
                                            v_offset: 0
                                        }
                                    }
                                },
                                responsiveLevels: [1240, 1024, 778, 480],
                                visibilityLevels: [1240, 1024, 778, 480],
                                gridwidth: [1240, 1024, 778, 480],
                                gridheight: [868, 768, 960, 600],
                                lazyType: "none",
                                shadow: 0,
                                spinner: "off",
                                stopLoop: "on",
                                stopAfterLoops: 0,
                                stopAtSlide: 1,
                                shuffle: "off",
                                autoHeight: "off",
                                fullScreenAutoWidth: "off",
                                fullScreenAlignForce: "off",
                                fullScreenOffsetContainer: "",
                                fullScreenOffset: "0",
                                disableProgressBar: "on",
                                hideThumbsOnMobile: "off",
                                hideSliderAtLimit: 0,
                                hideCaptionAtLimit: 0,
                                hideAllCaptionAtLilmit: 0,
                                debugMode: false,
                                fallbacks: {
                                    simplifyAll: "off",
                                    nextSlideOnWindowFocus: "off",
                                    disableFocusListener: false,
                                }
                            });
                        }
                        RsTypewriterAddOn(tpj, revapi1014);
                    }); /*ready*/
            }

            var owl = $('.header .owl-carousel');

            // testimonial owlCarousel
            $('.testimonial .owl-carousel').owlCarousel({
                loop:true,
                margin: 0,
                autoplay:true,
                dots: true,
                nav:false,
                navText: ["<i class='arrow'></i>", "<i class='arrow'></i>"],
                smartSpeed:800,
                items: 1            
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