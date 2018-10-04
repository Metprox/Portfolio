;$(function() {

    var posFixedHeader = function() {
        var header = $('.header');

        if($(window).scrollTop() > 0) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    };

    posFixedHeader();

    $(window).on('scroll',function() {

        posFixedHeader();

    });


    $('.cselect__current').on('click', function() {

        if( !$(this).closest('.cselect').hasClass('open') ) {

            $(this).closest('.cselect').addClass('open').find('.cselect__list').slideDown(200);
        } else {

            $(this).closest('.cselect').removeClass('open').find('.cselect__list').slideUp(200);
        }

    });

    $('.cselect__item >span').on('click', function(event) {
        var $select = $(this).attr('data-select');
        var $currentSelect = $(this).closest('.cselect').find('[data-current]');
        var $dataCurr = $currentSelect.attr('data-current');

        if( $select !== $dataCurr ) {

            $(this).closest('.cselect').removeClass('unselected').find('[data-current]').attr('data-current', $select);
            $(this).parent().addClass('active').siblings().removeClass('active');
            $(this).closest('.cselect').removeClass('open').find('.cselect__list').slideUp(200);
        } else {

            event.preventDefault();
            $(this).closest('.cselect').removeClass('open').find('.cselect__list').slideUp(200);
        }

    });

    /**
    * класс unselected => если необходимо, чтоб при window.onload селект изначально числился пустым
    */
    var cselect = document.getElementsByClassName('cselect');
    for(var i = 0; i < cselect.length; i++) {

        if(cselect[i].classList.contains('unselected')) {
            cselect[i].querySelector('.cselect__item.active').classList.remove('active');
        }

    }

});