$(document).ready(function() {
    $('.play').click(function() {
        $('#modalVideo').addClass('view');
        $('#modalVideo').get(0).play();
        $('#main-header').css('display', 'none');
        $('#top-header').css('display', 'none');
        $('#btn__close').css('display', 'block');
    });
});

$(document).ready(function() {
    $('#btn__close').click(function() {
        $('#modalVideo').removeClass('view');
        $('#modalVideo').get(0).pause();
        $('#main-header').css('display', 'block');
        $('#top-header').css('display', 'block');
        $('#btn__close').css('display', 'none');
    });
});