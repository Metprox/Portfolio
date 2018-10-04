$(document).ready(function() {
    var dataI = $('#scrollArrow').data('scroll-i');
    $('#scrollArrow').click(function() {
        if (dataI == 0) {
            $('.section3__blockText--hidden').slideDown('slow');
            $('#scrollArrow').addClass('arrowUp');
            dataI = 1;
        } else if (dataI == 1) {
            $('.section3__blockText--hidden').slideUp('slow');
            $('#scrollArrow').removeClass('arrowUp');
            dataI = 0;
        }


    });

});