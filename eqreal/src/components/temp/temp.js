(function() {

    $(document).ready(function() {
        var swiper2 = new Swiper('.swiper-container2', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        var swiper3 = new Swiper('.swiper-container3', {
            navigation: {
                nextEl: '#modal-button-next',
                prevEl: '#modal-button-prev',
            },
        });

        var swiper4 = new Swiper('.swiper-container4', {
            navigation: {
                nextEl: '#swiper4__button-next',
                prevEl: '#swiper4__button-prev',
            },
            direction: 'vertical',
            height: 248,
            breakpoints: {
                991: {
                    direction: 'horizontal',
                }
            }
        });

        $('.small-container2').on('click', function() {
            $('.modalBlock').addClass('visible--modal');
        });
        $('.modalBlock__close').on('click', function() {
            $('.modalBlock').removeClass('visible--modal');
        });


    });
})();