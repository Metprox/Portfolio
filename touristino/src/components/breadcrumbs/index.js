;$(function() {

    var breadcrumbOffsetLeft = function() {

        if($(window).width() <= 1510 && $(window).width() >= 1200) {

            var firstMenuItemPosition = $('.menu li:first-child').offset().left;

            $('.breadcrumbs').css({ marginLeft: (firstMenuItemPosition - 10)});
        }

    };

    breadcrumbOffsetLeft();
    $(window).resize(breadcrumbOffsetLeft);

});