(function() {

    $(document).ready(function() {

        $('.hamburger-box').click(function() {

            $('.hamburger').toggleClass('is-active');
            $('.hamburger-inner').toggleClass('active--color');
            $('.logo__img').toggleClass('active--color');
            $('.menu').toggleClass('menu--toggle');
            $('.text__bold--white').toggleClass('color-toggle');
            $('.content__img').toggleClass('img-in-out');
            $('.content__img--commercial').toggleClass('img-in-out');
            $('.rightBlock__content').toggleClass('text-in-out');
            $('.rightBlock__commercial').toggleClass('text-in-out');
            $('.bgText__list').toggleClass('bgText__list--active');
            $('.hoverBlock1').toggleClass('hoverBlock1--disable');
            $('.hoverBlock2').toggleClass('hoverBlock2--disable');
            $('.europeHover1').toggleClass('hoverBlock1--disable');
            $('.europeHover2').toggleClass('hoverBlock2--disable');
            $('.hoverBlock1__allText').toggleClass('hoverBlock1--disableText');
            $('.hoverBlock2__allText').toggleClass('hoverBlock2--disableText');
            $('.commercial').toggleClass('commercial--disable');
            $('.page__europe').toggleClass('page__europe--nonScroll');
            $('.leftBlock__contactUs').toggleClass('moveRight');
            $('.page__pricing').toggleClass('page__europe--nonScroll');
            $('.page__temp').toggleClass('toggles--overf');

            //screen < 575px

            if (screen.width <= 991) {
                $('.page').toggleClass('toggles--overf');
            }

        });

        $('.text__items').click(function(e) {

            $(this).addClass('text__items--js').parent('li').siblings().children('a').removeClass('text__items--js');
        });



        $('.text__items').each(function(index) {

            $(this).on('click', function() {

                switch (index) {
                    case 0:
                        $('.bgText__items').css('transform', 'translate3d(0%, -40vh, 0)');
                        break;

                    case 1:
                        $('.bgText__items').css('transform', 'translate3d(0%, -99vh, 0)');
                        break;

                    case 2:
                        $('.bgText__items').css('transform', 'translate3d(0%, -159vh, 0)');
                        break;

                    case 3:
                        $('.bgText__items').css('transform', 'translate3d(0%, -218vh, 0)');
                        break;

                    case 4:
                        $('.bgText__items').css('transform', 'translate3d(0%, -277vh, 0)');
                        break;

                    case 5:
                        $('.bgText__items').css('transform', 'translate3d(0%, -337vh, 0)');
                        break;

                    case 6:
                        $('.bgText__items').css('transform', 'translate3d(0%, -396vh, 0)');
                        break;

                    case 7:
                        $('.bgText__items').css('transform', 'translate3d(0%, -456vh, 0)');
                        break;

                    case 8:
                        $('.bgText__items').css('transform', 'translate3d(0%, -515vh, 0)');
                        break;

                }
            });

            $(this).hover(function() {

                switch (index) {
                    case 0:
                        $('.bgText__items').toggleClass('home');
                        break;

                    case 1:
                        $('.bgText__items').toggleClass('real');
                        break;

                    case 2:
                        $('.bgText__items').toggleClass('about');
                        break;

                    case 3:
                        $('.bgText__items').toggleClass('commerc');
                        break;

                    case 4:
                        $('.bgText__items').toggleClass('resident');
                        break;

                    case 5:
                        $('.bgText__items').toggleClass('brocks');
                        break;

                    case 6:
                        $('.bgText__items').toggleClass('news');
                        break;

                    case 7:
                        $('.bgText__items').toggleClass('cont');
                        break;

                    case 8:
                        $('.bgText__items').toggleClass('login');
                        break;
                }
            });

        });

    });

})();