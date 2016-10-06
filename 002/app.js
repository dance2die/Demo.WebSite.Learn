$(document).ready(function (){
    // http://luke.sno.wden.co.uk/full-screen-vertical-scroll#fsvs-initial-setup
    // The HTML tag must have a class of fsvs
    var slider = $.fn.fsvs({
        speed : 1000,
        selector : '> .slide',
        bodyID : 'fsvs-body'
    });

    slider.slideUp();
});




