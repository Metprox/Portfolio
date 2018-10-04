;$(function() {

    var social = $('footer').find('.social');
    var paymentMove = function() {

        if($(window).width() < 768) {

            if(!$('.footer__social').length) {

                var div = $('<div class="footer__item footer__social">');

                $('footer').find('.payment').before(div);
                div.append(social);

            }

        } else {

            $('footer').find('.footer-social').append(social);
            $('footer').find('.footer__social').remove();
        }

    };

    paymentMove();
    $(window).resize(paymentMove);


    $('.footer__item .h5').on('click',function() {

        if( $(window).width() < 1200 ) {

            if( $(this).next().is(':visible') ) {

                $(this).removeClass('open').next().slideUp(300);
            } else {

                $(this).closest('.footer-item__wrapper').find('.footer__list').slideUp(300);
                $(this).closest('.footer-item__wrapper').find('.h5').removeClass('open');
                $(this).addClass('open').next().slideDown(300);
            }
        }

    });

    $(window).on('resize', function() {

        if($(window).width() >= 1200) {

            $('.footer__item .h5').removeClass('open');
            $('.footer__list').removeAttr('style')
        };
    });

});



