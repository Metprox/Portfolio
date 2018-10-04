console.log("from index.js");

import 'jquery-touchswipe';
import 'jquery-mask-plugin';
import './libs/jquery.datetimepicker.full.min';
import './libs/TweenMax.min';
import './libs/jquery.waterwheelCarousel';
import './components/header';
import './components/slider';
import './components/tabs';
import './components/menu';
import './components/footer';
import './components/breadcrumbs';
import './components/slidingText';
import './components/popup';
import './components/basket';
import './components/officeTabs';
import './components/tabItem__localData';
import './components/tabItem__service';
import './components/tabItem__map';
import './components/tabItem__bonus';
import './components/tabItem__calendar';
import './components/menuAdaptive';
import './components/orderPlacement';
import './components/scrollaside';

export { moveToAnchor };
export { bannerOffsetTop };

$(function() {

    // ==== положение баннера на уровне со слайдером
    var $banner = $('.banner');

    if ($banner.length) {
        $('.sliding-aside').css({ marginTop: bannerOffsetTop() + 74 + 'px' });
    }

    // ==== страница post отступ слева guid
    var postGuid = $('.post-guid');

    if (postGuid.length) {

        var getLeftPositionGuid = postGuid.offset().left;
        $('.post-guid').css({ marginLeft: -getLeftPositionGuid, paddingLeft: getLeftPositionGuid });
    }


    // ==== terms sliding
    var setTermsHeight = 820;
    var getTermsHeight = $('.terms').outerHeight();

    (getTermsHeight > setTermsHeight) ? $('.terms').css({ maxHeight: setTermsHeight }): ($('.terms').css({ maxHeight: getTermsHeight }), $('.terms-button').hide());

    $('.terms-button').on('click', function() {
        console.log('click')

        if (!$(this).prev().hasClass('open')) {

            $('.terms').css({ maxHeight: getTermsHeight });
            $(this).prev().addClass('open');
        } else {

            $('.terms').css({ maxHeight: setTermsHeight });
            $(this).prev().removeClass('open');
        }
    });


    // ==== map function
    var _map = document.getElementById('map');
    if (_map) {
        initMap();
    };

    // ==== datetimepicker

    var years = ["2015", "2020"]; // min, max years

    $.datetimepicker.setLocale(['en', 'ru']);
    $('#datepicker').datetimepicker({
        timepicker: false,
        mask: true,
        format: 'D, d M Y',
        validateOnBlur: false,
        todayButton: false,
        scrollMonth: false,
        yearStart: years[0],
        yearEnd: years[1]
    });

    $('#timepicker').datetimepicker({
        datepicker: false,
        mask: true,
        format: 'g:H A',
        step: 15 // if need time minutes step
    });


    $('#datepicker2').datetimepicker({
        timepicker: true,
        inline: true,
        todayButton: false,
        prev: false,
        next: false,
        onGenerate: function(current_time, $input) {
            var ctMonth = current_time.getMonth();
            var ctDay = current_time.getDay();
            var ctNumDay = current_time.getDate();

            var dataval = $('.xdsoft_calendar');
            var dataday = $('#ChangeDataAndDay');
            var dayForDay = $('#dayForDay');
            var needDate = new Date().getDate();
            dayForDay.attr('data-day-for-day', needDate);



            if (ctMonth === 0) {
                dataval.attr('data-change-value', 'January');

            } else if (ctMonth === 1) {
                dataval.attr('data-change-value', 'February');

            } else if (ctMonth === 2) {
                dataval.attr('data-change-value', 'March');

            } else if (ctMonth === 3) {
                dataval.attr('data-change-value', 'April');

            } else if (ctMonth === 4) {
                dataval.attr('data-change-value', 'May');

            } else if (ctMonth === 5) {
                dataval.attr('data-change-value', 'June');

            } else if (ctMonth === 6) {
                dataval.attr('data-change-value', 'July');

            } else if (ctMonth === 7) {
                dataval.attr('data-change-value', 'August');

            } else if (ctMonth === 8) {
                dataval.attr('data-change-value', 'September');

            } else if (ctMonth === 9) {
                dataval.attr('data-change-value', 'October');

            } else if (ctMonth === 10) {
                dataval.attr('data-change-value', 'November');

            } else if (ctMonth === 11) {
                dataval.attr('data-change-value', 'December');
            }


            if (ctDay === 0) {
                dataday.attr('data-day-string', 'Sunday');
            } else if (ctDay === 1) {
                dataday.attr('data-day-string', 'Monday');
            } else if (ctDay === 2) {
                dataday.attr('data-day-string', 'Tuesday');
            } else if (ctDay === 3) {
                dataday.attr('data-day-string', 'Wednesday');
            } else if (ctDay === 4) {
                dataday.attr('data-day-string', 'Thursday');
            } else if (ctDay === 5) {
                dataday.attr('data-day-string', 'Friday');
            } else if (ctDay === 6) {
                dataday.attr('data-day-string', 'Saturday');
            }


            if (ctNumDay === 1) {
                dataday.attr('data-date-number', '1');
            } else if (ctNumDay === 2) {
                dataday.attr('data-date-number', '2');
            } else if (ctNumDay === 3) {
                dataday.attr('data-date-number', '3');
            } else if (ctNumDay === 4) {
                dataday.attr('data-date-number', '4');
            } else if (ctNumDay === 5) {
                dataday.attr('data-date-number', '5');
            } else if (ctNumDay === 6) {
                dataday.attr('data-date-number', '6');
            } else if (ctNumDay === 7) {
                dataday.attr('data-date-number', '7');
            } else if (ctNumDay === 8) {
                dataday.attr('data-date-number', '8');
            } else if (ctNumDay === 9) {
                dataday.attr('data-date-number', '9');
            } else if (ctNumDay === 10) {
                dataday.attr('data-date-number', '10');
            } else if (ctNumDay === 11) {
                dataday.attr('data-date-number', '11');
            } else if (ctNumDay === 12) {
                dataday.attr('data-date-number', '12');
            } else if (ctNumDay === 13) {
                dataday.attr('data-date-number', '13');
            } else if (ctNumDay === 14) {
                dataday.attr('data-date-number', '14');
            } else if (ctNumDay === 15) {
                dataday.attr('data-date-number', '15');
            } else if (ctNumDay === 16) {
                dataday.attr('data-date-number', '16');
            } else if (ctNumDay === 17) {
                dataday.attr('data-date-number', '17');
            } else if (ctNumDay === 18) {
                dataday.attr('data-date-number', '18');
            } else if (ctNumDay === 19) {
                dataday.attr('data-date-number', '19');
            } else if (ctNumDay === 20) {
                dataday.attr('data-date-number', '20');
            } else if (ctNumDay === 21) {
                dataday.attr('data-date-number', '21');
            } else if (ctNumDay === 22) {
                dataday.attr('data-date-number', '22');
            } else if (ctNumDay === 23) {
                dataday.attr('data-date-number', '23');
            } else if (ctNumDay === 24) {
                dataday.attr('data-date-number', '24');
            } else if (ctNumDay === 25) {
                dataday.attr('data-date-number', '25');
            } else if (ctNumDay === 26) {
                dataday.attr('data-date-number', '26');
            } else if (ctNumDay === 27) {
                dataday.attr('data-date-number', '27');
            } else if (ctNumDay === 28) {
                dataday.attr('data-date-number', '28');
            } else if (ctNumDay === 29) {
                dataday.attr('data-date-number', '29');
            } else if (ctNumDay === 30) {
                dataday.attr('data-date-number', '30');
            } else if (ctNumDay === 31) {
                dataday.attr('data-date-number', '31');
            }
        },

    });


    var calendarClasses = ["calendar", "calendar-time"]; // == set classes for all datetimepickers
    var calendarItems = document.getElementsByClassName('xdsoft_datetimepicker');

    if (calendarItems) {
        if (calendarItems.length > 1) {
            for (var i = 0; i < calendarItems.length; i++) {
                calendarItems[i].classList.add(calendarClasses[i]);
                var calendarChild = calendarItems[i].querySelector('.active');
                calendarChild.classList.add(calendarClasses[i] + '__item');
            };
        } else {

            for (var i = 0; i < calendarItems.length; i++) {
                calendarItems[i].classList.add('personal-calendar');
                var calendarChild = calendarItems[i].querySelector('.active');
                calendarChild.classList.add('personal-calendar__item');
            }

        }
    }


    // === remove click on label at form
    var formLabels = document.getElementsByClassName('reserve__title');
    for (var label of formLabels) label.addEventListener('click', (event) => event.preventDefault());

    /**
     * move main-guid__list into main-guid__text at index.html on 1199px
     */

    var mainGuid = document.getElementsByClassName('main-guid')[0];

    if (mainGuid) {

        var mainGuidList = mainGuid.getElementsByClassName('main-guid__list')[0];
        var mainGuidText = mainGuid.getElementsByClassName('main-guid__text')[0];
        var mainGuidListInText = mainGuidText.querySelector('.main-guid__list');
        var mainGuidTextItemAfter = mainGuidText.getElementsByClassName('main-guid__slogan')[0];

        var moveMainGuidFunction = () => {
            if (window.screen.width < 1200) {

                if ($('.main-guid__text').find('.main-guid__list').length == 0) {
                    mainGuidText.insertBefore(mainGuidList, mainGuidTextItemAfter);
                }
            } else {

                if (!$('.main-guid ain-guid__list').length) mainGuid.append(mainGuidList);
            }
        }

        moveMainGuidFunction();
        $(window).resize(moveMainGuidFunction);

    }

    moveToAnchor();

    $('[data-anchor]').each(function() {

        $(this).on('click', function(event) {

            var anchor = $(this).attr('data-anchor');
            localStorage['anchor'] = anchor;

        });

    });


});

/**
 * anchor
 * @param anchor - атрибут ссылки data-anchor
 * записываем в localStorage
 * после перехода проверяем localStorage, если не undefined перезаписываем anchor, удаляем localStorage
 * скролим к объкту anchor
 */
function moveToAnchor() {
    setTimeout(function() {

        if (localStorage['anchor'] != undefined) {

            var anchor = localStorage['anchor'];
            delete localStorage['anchor'];

            $('html, body').stop().animate({ scrollTop: $(anchor).offset().top - 200 }, 15e2);

        }

    }, 1e3);
}

/**
 * функция расчета положения баннера от верхнего края
 * @param $getOffsetTop отступ от верхнего края документа
 * @param 93 - высота крошек и внешний отступ блока .present
 * @param $headerHeight - высота шапки
 * return $getOffsetTop
 */
function bannerOffsetTop() {
    var $headerHeight = $('header').outerHeight();
    var $getOffsetTop = $('.present').offset().top - 93 - $headerHeight;

    return $getOffsetTop;
}