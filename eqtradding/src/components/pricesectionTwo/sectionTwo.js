$(document).ready(function() {
    $('.desktop__table .table__header .table__row').children().each(function(index) {
        if ($(this).text() != '') {
            var classH3 = (index - 1) == 0 ? ' in active__bg' : '';
            $('.mobile__table').append('<div class="mobile__tableList mobile__Index_' + (index - 1) + '"><h3 class="mobile__tableListH3 ' + classH3 + '">' + $(this).html() + '</h3><div class="main__closes"></div></div>');
        }
    });

    $('.desktop__table .table__body').each(function() {

        $(this).find('.col__small').each(function(i) {
            var classItem = i == 0 ? ' show' : '';

            if ($(this).html().indexOf('check.png') != -1) {


                if ($(this).parent().hasClass('table__bg')) {
                    classItem += ('mobileTitle__bg');
                }

                $('.mobile__Index_' + i).find('.main__closes').append('<div class="mobile__content ' + classItem + '">' +
                    '<div class="mobile__tableItem">' + '<div>' + $(this).parent().children('.col__big').html() + '</div>' + '</div>' + '</div>');

            }
        });
    });
    setTimeout(
        $('.col__small--end').each(function(index) {
            var classItem = (index) == 0 ? ' show' : '';
            if ($(this).children().hasClass('marge')) {
                $('.mobile__Index_' + (index)).find('.main__closes').append('<div class="mobile__content mobile__textContent' + classItem + '">' + $(this).html() + '</div>');
            }
        }), 24);
    setTimeout(
        $('.col__small--end').each(function(index) {
            var classItem = (index - 3) == 0 ? ' show' : '';
            if ($(this).children().hasClass('table__button')) {
                $('.mobile__Index_' + (index - 3)).find('.main__closes').append('<div class="mobile__content mobile__tableButton' + classItem + '">' + $(this).children().html() + '</div>');
            }
        }), 24);
});

$(document).ready(function() {

    $('.mobile__tableListH3').click(function() {

        if (!$(this).hasClass('in')) {
            if ($('.mobile__tableListH3').hasClass('in')) {
                $('.mobile__tableListH3').removeClass('in active__bg').parent().find('.main__closes').slideUp('fast').removeClass('show');
                $('.mobile__tableListH3 .main__closes .active__bg').removeClass('active__bg');
            }


            $(this).addClass('active__bg in').parent().find('.main__closes').slideDown('fast').addClass("show");
        }
    });
});