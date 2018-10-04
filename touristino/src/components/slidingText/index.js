;$(function() {

    /**
     * функция вычисления высот каждого из элементов
     * @param h - высота каждого элемента в родительском блоке
     * @param compstyle - получение css
     * @param brHeight - установка высоты для тега br, если таков присутствует
     * return сумму всех высот
     */
    const sumElementsHeight = () => {
        var sum;
        var arr = [];
        var h = 0;

        if($('.shorty').length) {
            $('.shorty').children().each(function() {

                var compstyle = getComputedStyle(this);
                var brHeight = parseInt(compstyle.lineHeight);

                h = this.tagName == 'BR' ? h = brHeight : h = $(this).height();
                arr.push(h);

            });

            sum = arr.reduce( (a,b) => a + b );
        }

        return sum;
    };

    /**
     * для сео блоков
     * функция разворачивания и сворачивания текста по высоте
     * @param sumHeight - высота всех элементов
     * @param minHeight - минимальная высота родительского блока
     */
    var flag = true;
    const toggleText = (sumHeight) => {

        var minHeight = $('.seo__text').attr('data-short-height');

        if($(window).width() < 480 && $('.seo__text').height() > minHeight) {

            if(flag) {

                $('.seo__text').css({maxHeight: minHeight + 'px', overflow:'hidden'});
                $('.seo-button').attr('data-display', 'true').data('hidden', 'true');

                flag = !flag;

            }


        } else if($(window).width() >= 480) {

            $('.seo__text').css({maxHeight: sumHeight + 'px'});
            $('.seo-button').attr('data-display', 'false').data('hidden','false');

            flag = true;
        }

    };

    /**
     * для about блока
     */

    const toggleText2 = sumHeight => {

        var minHeight = $('.about-block__text .shorty').attr('data-short-height');

        if($('.about-block__text .shorty').height() > minHeight) {

            if(flag) {

                $('.about-block__text .shorty').css({maxHeight: minHeight + 'px', overflow:'hidden'});
                $('.about-block__button').attr('data-display', 'true').data('hidden', 'true');

                flag = !flag;
            }

        } else {

            $('.about-block__text .shorty').css({maxHeight: sumHeight + 'px', overflow:'hidden'});
            $('.about-block__button').attr('data-display', 'false').data('hidden', 'false');

            flag = true;
        }

    }

    const shortyButtonToggleClick = () => {

        var minHeight = $('.shorty').attr('data-short-height');

        $(document).on('click', '.shorty-button', function(event) {

            var sumHeight = sumElementsHeight();
            var _this = $(this);

            const toggleVisibilityButton = () => {

                _this.css({visibility: 'hidden'});
                setTimeout( () => { _this.css({visibility: ''}) },300);

            }

            if(_this.data('hidden') == 'true') {

                toggleVisibilityButton();

                _this.data('hidden', 'false');
                _this.parent().find('.shorty').css({maxHeight: sumHeight + 'px', overflow: ''});
            } else {

                toggleVisibilityButton();

                _this.data('hidden', 'true');
                _this.parent().find('.shorty').css({maxHeight: minHeight + 'px', overflow: 'hidden' });
            }


            event.preventDefault();
        });
    };

    shortyButtonToggleClick();

    toggleText(sumElementsHeight());
    toggleText2(sumElementsHeight());

    $(window).resize(function() {
        toggleText(sumElementsHeight())
    });

});