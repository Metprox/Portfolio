//= ../bower_components/swiper/dist/js/swiper.js
//= ../bower_components/jQuery-viewport-checker/dist/jquery.viewportchecker.min.js
//= components/section1/section1.js
//= components/section2/section2.js
//= components/section3/section3.js

$(document).ready(function() {
    var data0 = $('#img__langId').data('vision');
    $('.select-styled').click(function() {
        $('#img__langId').toggleClass('inversion');
    });
});

$(document).ready(function() {
    $('.select-options li').click(function() {
        $('#img__langId').removeClass('inversion');
    });
});

$(document).click(function(e) {
    var cont = $('#img__langId');
    if (cont.has(e.target).length === 0) {
        cont.removeClass('inversion');
    }
});

// Animate


// $(document).ready(function() {
//     var $target = $('.post');
//     var hold = 200;
//     $.each($target, function(i, t) {
//         var $this = $(t);
//         $this.addClass('hidden').css('animation-fill-mode', 'both');
//         setTimeout(function() {
//             $this.viewportChecker({
//                 classToAdd: 'visible animated fadeInUp',
//                 offset: 4
//             });
//         }, i * hold);
//     });
// });

$(document).ready(function() {
    var hold = 204;
    $('.post').each(function(i, t) {
        var self = $(t);
        setTimeout(function() {
            $(self).addClass('post1--visible');
            $(self).removeClass('post');
        }, i * hold);
    });
});