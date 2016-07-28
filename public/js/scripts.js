$(document).ready(function() {

// Smooth Scrolling Function
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
            }
        }
    });
});


$('.m-prev').click(function() {
    $(this).closest('.e-testimonial-item').slick('slickPrev');
});

$('.m-next').click(function() {
    $(this).closest('.e-testimonial-item').slick('slickNext');
});

$('.more-info').click(function() {
    if ($(this).children('.material-icons').text() == 'add_circle_outline') {
        $(this).children('.material-icons').text('remove_circle_outline');

    } else {
        $(this).children('.material-icons').text('add_circle_outline');
    }

    $('.company-extra-info .columns').slideToggle();
});


}); // doc.ready

