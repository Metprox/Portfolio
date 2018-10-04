var $target = $('.good');
var hold = 500;

$.each($target, function(i, t) {
    var $this = $(t);
    setTimeout(function() {
        $this.fadeIn();
    }, i * hold);
})


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    // hashNavigation: {
    //     watchState: true,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper2 = new Swiper('.swiper-container2', {
    spaceBetween: 30,
    slidesPerView: 1,
    init: false,
    hashNavigation: {
        watchState: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 1,
            spaceBetween: 100
        },
    },
});


$(document).ready(function() {

    swiper2.init();

    $(window).resize(function() {


        if ($(window).width() >= 993) {

            swiper2.destroy();

            console.log('test');
        } else if ($(window).width() <= 992) {
            swiper2.init();
            swiper2.on();
        }
    });
});






// $(document).ready(function() {
//     $('.swiper__points').each(function(i) {
//         if ($(this).children().last().text().slice(0, 1).toLowerCase() == '-') {
//             if ($(this).children().first().hasClass('bool')) {
//                 $(this).children().first().addClass('redBool');
//             }
//         }
//     });
// });



$(document).ready(function() {
    $('.swiper__points').each(function(i) {
        var prs = $(this).children().last().text().toLowerCase().slice();

        if (parseFloat(prs) > 0) {
            if ($(this).children().first().hasClass('bool')) {
                $(this).children().first().addClass('greenBool');
            }
        }

        if (parseFloat(prs) < 0) {
            if ($(this).children().first().hasClass('bool')) {
                $(this).children().first().addClass('redBool');
            }
        }
    });
});