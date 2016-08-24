$(window).on('load', function () {
    var $preloader = $('#prelaoder'),
        $spinner   = $preloader.find('.loadcircle');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});