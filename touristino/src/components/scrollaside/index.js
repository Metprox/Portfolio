import { bannerOffsetTop }  from '../../index';

;$(function() {

    $(window).on('scroll', scrollAside);
    scrollAside();

});
/**
 * @param slidingAsideWidth/slidingAsideHeight => ширина/высота aside
 * @param mainPathWidth/mainPathHeight => ширина/высота левой контеной части
 * @param mainPathOffset.top/.left => отступ сверху/слева левой контентной части
 * @param fixedPosLeftAside => положение aside от левого края при фиксированом позиционировании = mainPathWidth + mainPathOffset
 * @param offsetTop => отступ сверху, когда доскролили до aside, нужно назначить класс fixed  для aside
 * @param leftPath/rightPath => высота и отступ сверху левой/правой частей
 * @param posTopForAbsolute => разница высот для остановки скользящего aside в нижнем абсолютном положении
 */
function scrollAside() {
    var slidingAside = $('.sliding-aside');
    var slidingAsideWidth = Math.floor(slidingAside.width());
    var slidingAsideHeight = Math.floor(slidingAside.height());
    var mainPathWidth = $('.main-path').width();
    var mainPathHeight = $('.main-path').height();
    var mainPathOffset = $('.main-path').offset();
    var marginLeft = $('.wrapper').width() * 0.02;

    var fixedPosLeftAside = Math.floor(mainPathOffset.left + mainPathWidth + marginLeft);

    var scrollTop = $(window).scrollTop();
    var leftPath = mainPathHeight + mainPathOffset.top;
    var rightPath = slidingAsideHeight + scrollTop;

    var posTopForAbsolute = mainPathHeight - slidingAsideHeight;

    if(slidingAside.length) {

        if($(window).width() >= 1200) {

            // проверяем есть ли баннер
            var offsetTop = ($('.banner').length) ?
                mainPathOffset.top + bannerOffsetTop() : mainPathOffset.top + 74;

            // проверяем положение окна от верхнего края, не было ли скролла
            if($(window).scrollTop() >= offsetTop) {

                // назначаем класс с pos: fixed
                $('.main-path').width(mainPathWidth);
                slidingAside.width(slidingAsideWidth).addClass('fixed-aside');

                // проверка не находится ли правая часть (aside) ниже левой (контентной части)
                // если левая нижняя часть выше правой нижней, работает fixed, иначе крепим к низу родителя pos: absolute
                if(leftPath >=  rightPath) {
                    slidingAside.css({position: '', top: '', left: fixedPosLeftAside + 'px'});
                } else {
                    slidingAside.css({position: 'absolute', top: 'initial', bottom: 0, left: '', right: '10px' });
                    // slidingAside.css({position: 'absolute', top:posTopForAbsolute + 'px', left: '', right: '10px' });
                }
            }
            else {

                $('.main-path').css({width: ''});
                slidingAside.removeClass('fixed-aside').css({left: '', width: '', top: '', position: '', bottom: '', right: ''});
            }

        }

    }
}