    var $window = $(window);
    // var $PortfolioGallery = $('.portfolio-gallery-isotope').isotope({
    //         // options
    //     });

        // filter items on button click
        // $('.filtering').on('click', 'span', function() {
        //     var filterValue = $(this).attr('data-filter');
        //     $PortfolioGallery.isotope({
        //         filter: filterValue
        //     });
        // });

        // $('.filtering').on('click', 'span', function() {
        //     $(this).addClass('active').siblings().removeClass('active');
        // });

        $('.portfolio-gallery,.portfolio-gallery-isotope').lightGallery();

        // stellar
        $window.stellar();