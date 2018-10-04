$(document).ready(function() {
    $('.open__btn').click(function() {
        if (!$(this).next('.open__content').hasClass('in')) {
            if ($('.open__content').hasClass('in')) {
                $('.open__content').removeClass('in').slideUp('slow');
                $('.active__bg').removeClass('active__bg');
            }
            $(this).addClass('active__bg').next('.open__content').slideDown('slow').addClass('in');
        }
    });
});