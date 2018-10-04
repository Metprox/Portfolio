$(document).ready(function() {

    $('.contactButton').on('click', function() {
        $(this).addClass('moveLeft--opacity');
        $('.formBlock').addClass('moveLeft');
    });

    $('.positionSubmit').on('click', function() {
        $('.contactButton').removeClass('moveLeft--opacity');
        $('.formBlock').removeClass('moveLeft');
    });

});